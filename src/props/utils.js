/* @flow */

import type { Breakdown } from './onShippingChange';

export const calculateTotalFromShippingBreakdownAmounts = ({ breakdown = {}, updatedAmounts = {} } : {| breakdown : Breakdown, updatedAmounts : {| [string] : string |} |}) : string => {
    let newAmount = 0;
    const updatedAmountKeys = Object.keys(updatedAmounts) || [];

    Object.keys(breakdown).forEach(item => {
        if (item === 'shipping_discount') {
            // don't process
        }

        if (updatedAmountKeys.indexOf(item) !== -1) {
            newAmount += parseFloat(updatedAmounts[item]);
        } else {
            newAmount += parseFloat(breakdown[item]?.value);
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
