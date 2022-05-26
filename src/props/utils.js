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
    const breakdownKeys = Object.keys(breakdown);
    const updatedAmountKeys = Object.keys(updatedAmounts);

    const currency_code = breakdown[breakdownKeys[0]]?.currency_code;

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
    const convertedQueries = [];
    const patchQueryKeys = Object.keys(queries);
    if (patchQueryKeys) {
        patchQueryKeys.forEach(key => {
            convertedQueries.push(queries[key]);
        });
    }

    return convertedQueries;
};
