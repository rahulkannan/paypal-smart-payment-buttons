/* @flow */

import { type Breakdown, type Query, ON_SHIPPING_CHANGE_PATHS } from './onShippingChange';

export const calculateTotalFromShippingBreakdownAmounts = ({ breakdown, updatedAmounts } : {| breakdown : Breakdown, updatedAmounts : {| [string] : string |} |}) : string => {
    let newAmount = 0;
    const updatedAmountKeys = Object.keys(updatedAmounts) || [];

    Object.keys(breakdown).forEach(item => {
        if (updatedAmountKeys.indexOf(item) !== -1) {
            newAmount += parseFloat(updatedAmounts[item]);
        } else {
            newAmount += parseFloat(breakdown[item]?.value);
        }
    });

    updatedAmountKeys.forEach(key => {
        if (!breakdown[key]) {
            newAmount += parseFloat(updatedAmounts[key]);
        }
    });

    return newAmount.toFixed(2);
};

export const buildBreakdown = ({ breakdown = {}, updatedAmounts = {} } : {| breakdown : Breakdown, updatedAmounts : {| [string] : string |} |}) : Breakdown => {
    const updatedAmountKeys = Object.keys(updatedAmounts);

    // $FlowFixMe
    const currency_code = Object.values(breakdown)[0]?.currency_code;

    updatedAmountKeys.forEach(key => {
        if (!breakdown[key]) {
            breakdown[key] = {
                currency_code,
                value: updatedAmounts[key]
            };
        } else {
            breakdown[key].value = updatedAmounts[key];
        }
    });

    return breakdown;
};

export const convertQueriesToArray = ({ queries } : {| queries : {| [$Values<typeof ON_SHIPPING_CHANGE_PATHS>] : Query |} |}) : $ReadOnlyArray<Query> => {
    // $FlowFixMe
    return Object.values(queries) || [];
};
