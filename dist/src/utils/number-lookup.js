"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lookup = [
    { value: 1e3, symbol: 'k', label: 'thousand' },
    { value: 1e6, symbol: ['m', 'mil', 'mill', 'mln'], label: 'million' },
    { value: 1e9, symbol: ['bn', 'bil', 'bill', 'bln'], label: 'billion' },
    {
        value: 1e12,
        symbol: ['tn', 'tril', 'trill', 'tln'],
        label: 'trillion'
    }
];
exports.default = lookup;
//# sourceMappingURL=number-lookup.js.map