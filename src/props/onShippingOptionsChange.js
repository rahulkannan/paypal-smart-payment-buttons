/* @flow */

import { ZalgoPromise } from '@krakenjs/zalgo-promise/src';
import { COUNTRY, FPTI_KEY } from '@paypal/sdk-constants/src';

import { patchOrder, type OrderResponse } from '../api';
import { FPTI_TRANSITION, FPTI_CONTEXT_TYPE, LSAT_UPGRADE_EXCLUDED_MERCHANTS, FPTI_CUSTOM_KEY } from '../constants';
import { getLogger } from '../lib';

import type { CreateOrder } from './createOrder';
import type { ShippingAmount, ShippingOption, Query, ON_SHIPPING_CHANGE_EVENT } from './onShippingChange';
       
export type XOnShippingOptionsChangeDataType = {|
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

export type XOnShippingOptionsChangeActionsType = {|
    patch : () => ZalgoPromise<OrderResponse>,
    query : () => $ReadOnlyArray<Query>,
    reject : (mixed) => ZalgoPromise<void>,
    updateShippingDiscount : ({| discountAmount : string |}) => XOnShippingOptionsChangeActionsType,
    updateShippingOptions : ({| shippingOptions : $ReadOnlyArray<ShippingOption> |}) => XOnShippingOptionsChangeActionsType
|};

export type XOnShippingOptionsChange = (XOnShippingOptionsChangeDataType, XOnShippingOptionsChangeActionsType) => ZalgoPromise<void>;

export type OnShippingOptionsChangeData = {|
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
        
export type OnShippingOptionsChangeActionsType = {|
    resolve : () => ZalgoPromise<void>,
    reject : () => ZalgoPromise<void>
|};
            
export function buildXOnShippingOptionsChangeData(data : OnShippingOptionsChangeData) : XOnShippingOptionsChangeDataType {
    // eslint-disable-next-line no-unused-vars
    const { amount, buyerAccessToken, event, forceRestAPI, ...rest } = data;

    return rest;
}

export function buildXOnShippingOptionsChangeActions({ data, actions: passedActions, orderID, facilitatorAccessToken, buyerAccessToken, partnerAttributionID, forceRestAPI } : {| data : OnShippingOptionsChangeData, actions : OnShippingOptionsChangeActionsType, orderID : string, facilitatorAccessToken : string, buyerAccessToken : ?string, partnerAttributionID : ?string, forceRestAPI : boolean |}) : XOnShippingOptionsChangeActionsType {
    const patchQueries = [];

    const actions = {
        reject: passedActions.reject || function reject() {
            throw new Error(`Missing reject action callback`);
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

export type OnShippingOptionsChange = (OnShippingOptionsChangeData, OnShippingOptionsChangeActionsType) => ZalgoPromise<void>;

type OnShippingOptionsChangeXProps = {|
    onShippingOptionsChange : ?XOnShippingOptionsChange,
    partnerAttributionID : ?string,
    clientID : string
|};

export function getOnShippingOptionsChange({ onShippingOptionsChange, partnerAttributionID, clientID } : OnShippingOptionsChangeXProps, { facilitatorAccessToken, createOrder } : {| facilitatorAccessToken : string, createOrder : CreateOrder |}) : ?OnShippingOptionsChange {
    const upgradeLSAT = LSAT_UPGRADE_EXCLUDED_MERCHANTS.indexOf(clientID) === -1;

    if (onShippingOptionsChange) {
        return ({ buyerAccessToken, forceRestAPI = upgradeLSAT, ...data }, actions) => {
            return createOrder().then(orderID => {
                getLogger()
                    .info('button_shipping_options_change')
                    .track({
                        [FPTI_KEY.TRANSITION]:                       FPTI_TRANSITION.CHECKOUT_SHIPPING_OPTIONS_CHANGE,
                        [FPTI_KEY.CONTEXT_TYPE]:                     FPTI_CONTEXT_TYPE.ORDER_ID,
                        [FPTI_KEY.TOKEN]:                            orderID,
                        [FPTI_KEY.CONTEXT_ID]:                       orderID,
                        [FPTI_CUSTOM_KEY.SHIPPING_CALLBACK_INVOKED]: '1'
                    }).flush();
                
                return onShippingOptionsChange(buildXOnShippingOptionsChangeData(data), buildXOnShippingOptionsChangeActions({ data, actions, orderID, facilitatorAccessToken, buyerAccessToken, partnerAttributionID, forceRestAPI }));
            });
        };
    }
}
