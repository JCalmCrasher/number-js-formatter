"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendlyFormat = void 0;
const formatNumber_1 = __importDefault(require("./utils/formatNumber"));
const getLookupNumber_1 = require("./utils/getLookupNumber");
function friendlyFormat(number, options = { noOfDigitsAfterDecimal: 0, form: 'default' }) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('Number is not a number');
    }
    const { value, label, symbol } = (0, getLookupNumber_1.getNumberFromDict)(number);
    let result = '';
    if (label === 'thousand') {
        result =
            (0, formatNumber_1.default)(number / value, options.noOfDigitsAfterDecimal) + symbol[0];
    }
    else {
        switch (options.form) {
            case '-il':
                result =
                    (0, formatNumber_1.default)(number / value, options.noOfDigitsAfterDecimal) +
                        symbol[1];
                break;
            case '-ill':
                result =
                    (0, formatNumber_1.default)(number / value, options.noOfDigitsAfterDecimal) +
                        symbol[2];
                break;
            case '-ln':
                result =
                    (0, formatNumber_1.default)(number / value, options.noOfDigitsAfterDecimal) +
                        symbol[3];
                break;
            default:
                result =
                    (0, formatNumber_1.default)(number / value, options.noOfDigitsAfterDecimal) +
                        symbol[0];
                break;
        }
    }
    return result;
}
exports.friendlyFormat = friendlyFormat;
//# sourceMappingURL=friendly-format.js.map