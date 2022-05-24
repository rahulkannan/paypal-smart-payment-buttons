/* @flow */

import type { ShippingAmount } from './onShippingChange';

export const setShippingBreakdownAmounts = ({ amount = {} } : {| amount : ?ShippingAmount |}) : string => {
    let newAmount = 0;
    const breakdown = amount?.breakdown || {};

    Object.keys(breakdown).forEach(item => {
        if (item === 'discount') {
            newAmount -= parseFloat(breakdown[item]?.value);
        }

        if (item === 'shipping_discount') {
            newAmount -= parseFloat(breakdown[item]?.value);
        }

        newAmount += parseFloat(breakdown[item]?.value);
    });

    return newAmount.toFixed(2);
};
