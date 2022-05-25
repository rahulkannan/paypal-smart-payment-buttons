/* @flow */

import { ZalgoPromise } from '@krakenjs/zalgo-promise/src';
import { COUNTRY, FPTI_KEY } from '@paypal/sdk-constants/src';

import { patchOrder, type OrderResponse } from '../api';
import { FPTI_TRANSITION, FPTI_CONTEXT_TYPE, LSAT_UPGRADE_EXCLUDED_MERCHANTS, FPTI_CUSTOM_KEY } from '../constants';
import { getLogger } from '../lib';

import type { CreateOrder } from './createOrder';
import type { ShippingAmount, ShippingOption, Query, ON_SHIPPING_CHANGE_EVENT } from './onShippingChange';
import { buildBreakdown, calculateTotalFromShippingBreakdownAmounts } from './utils';
        
export type XOnShippingAddressChangeDataType = {|
    orderID? : string,
    paymentID? : string,
    paymentToken? : string,
    shipping_address? : {|
        city : string,
        state : string,
        country_code : $Values<typeof COUNTRY>,
        postal_code : string
    |}
|};

export type XOnShippingAddressChangeActionsType = {|
    patch : () => ZalgoPromise<OrderResponse>,
    query : () => $ReadOnlyArray<Query>,
    reject : (mixed) => ZalgoPromise<void>,
    updateShippingOptions : ({| shippingOptions : $ReadOnlyArray<ShippingOption> |}) => XOnShippingAddressChangeActionsType,
    updateTax : ({| taxAmount : string |}) => XOnShippingAddressChangeActionsType
|};

export type XOnShippingAddressChange = (XOnShippingAddressChangeDataType, XOnShippingAddressChangeActionsType) => ZalgoPromise<void>;

export type OnShippingAddressChangeData = {|
    orderID? : string,
    paymentID? : string,
    paymentToken? : string,
    shipping_address? : {|
        city : string,
        state : string,
        country_code : $Values<typeof COUNTRY>,
        postal_code : string
    |},
    amount? : ShippingAmount,
    event? : ON_SHIPPING_CHANGE_EVENT,
    buyerAccessToken? : ?string,
    forceRestAPI? : boolean
|};
        
export type OnShippingAddressChangeActionsType = {|
    resolve : () => ZalgoPromise<void>,
    reject : () => ZalgoPromise<void>
|};
            
export function buildXOnShippingAddressChangeData(data : OnShippingAddressChangeData) : XOnShippingAddressChangeDataType {
    // eslint-disable-next-line no-unused-vars
    const { amount, buyerAccessToken, event, forceRestAPI, ...rest } = data;

    return rest;
}

export function buildXOnShippingAddressChangeActions({ data, actions: passedActions, orderID, facilitatorAccessToken, buyerAccessToken, partnerAttributionID, forceRestAPI } : {| data : OnShippingAddressChangeData, actions : OnShippingAddressChangeActionsType, orderID : string, facilitatorAccessToken : string, buyerAccessToken : ?string, partnerAttributionID : ?string, forceRestAPI : boolean |}) : XOnShippingAddressChangeActionsType {
    const patchQueries = [];

    const actions = {
        reject: passedActions.reject || function reject() {
            throw new Error(`Missing reject action callback`);
        },

        updateTax: ({ taxAmount }) => {
            const newAmount = calculateTotalFromShippingBreakdownAmounts({ breakdown: data?.amount?.breakdown || {}, updatedAmounts: { tax_total: taxAmount } });
            const breakdown = buildBreakdown({ breakdown: data?.amount?.breakdown || {}, updatedAmounts: { tax_total: taxAmount } });
        
            patchQueries.push({
                op:       data?.event || 'replace', // or 'add' if there are none.
                // eslint-disable-next-line quotes
                path:     "/purchase_units/@reference_id=='default'/amount",
                value: {
                    value:         `${ newAmount }`,
                    currency_code: data?.amount?.currency_code,
                    breakdown
                }
            });

            return actions;
        },

        updateShippingOptions: ({ shippingOptions }) => {
            patchQueries.push({
                op:    data?.event || 'replace', // or 'add' if there are none.
                // eslint-disable-next-line quotes
                path:  "/purchase_units/@reference_id=='default'/shipping/options",
                value: shippingOptions || []
            });
            return actions;
        },

        patch: () => {
            return patchOrder(orderID, patchQueries, { facilitatorAccessToken, buyerAccessToken, partnerAttributionID, forceRestAPI }).catch(() => {
                throw new Error('Order could not be patched');
            });
        },

        query: () => patchQueries

    };

    return actions;
}

export type OnShippingAddressChange = (OnShippingAddressChangeData, OnShippingAddressChangeActionsType) => ZalgoPromise<void>;

type OnShippingAddressChangeXProps = {|
    onShippingAddressChange : ?XOnShippingAddressChange,
    partnerAttributionID : ?string,
    clientID : string
|};

export function getOnShippingAddressChange({ onShippingAddressChange, partnerAttributionID, clientID } : OnShippingAddressChangeXProps, { facilitatorAccessToken, createOrder } : {| facilitatorAccessToken : string, createOrder : CreateOrder |}) : ?OnShippingAddressChange {
    const upgradeLSAT = LSAT_UPGRADE_EXCLUDED_MERCHANTS.indexOf(clientID) === -1;

    if (onShippingAddressChange) {
        return ({ buyerAccessToken, forceRestAPI = upgradeLSAT, ...data }, actions) => {
            return createOrder().then(orderID => {
                getLogger()
                    .info('button_shipping_address_change')
                    .track({
                        [FPTI_KEY.TRANSITION]:                       FPTI_TRANSITION.CHECKOUT_SHIPPING_ADDRESS_CHANGE,
                        [FPTI_KEY.CONTEXT_TYPE]:                     FPTI_CONTEXT_TYPE.ORDER_ID,
                        [FPTI_KEY.TOKEN]:                            orderID,
                        [FPTI_KEY.CONTEXT_ID]:                       orderID,
                        [FPTI_CUSTOM_KEY.SHIPPING_CALLBACK_INVOKED]: '1'
                    }).flush();
                
                return onShippingAddressChange(buildXOnShippingAddressChangeData(data), buildXOnShippingAddressChangeActions({ data, actions, orderID, facilitatorAccessToken, buyerAccessToken, partnerAttributionID, forceRestAPI }));
            });
        };
    }
}
