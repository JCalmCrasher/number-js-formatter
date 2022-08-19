"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatNumber(number, digits) {
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    return number.toFixed(digits).replace(regex, '$1');
}
exports.default = formatNumber;
//# sourceMappingURL=formatNumber.js.map