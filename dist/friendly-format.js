"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendlyFormat = void 0;
const number_lookup_1 = __importDefault(require("./number-lookup"));
function friendlyFormat(number, digits = 0) {
    const lookupNumbers = number_lookup_1.default;
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = lookupNumbers.slice().reverse().find(function (item) {
        return number >= item.value;
    });
    return result ? (number / result.value).toFixed(digits).replace(regex, "$1") + result.symbol : "0";
}
exports.friendlyFormat = friendlyFormat;
//# sourceMappingURL=friendly-format.js.map