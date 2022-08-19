"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberFromDict = void 0;
const number_lookup_1 = __importDefault(require("./number-lookup"));
const getNumberFromDict = (number) => {
    const lookupNumber = number_lookup_1.default
        .slice()
        .reverse()
        .find((item) => number >= item.value) || {};
    return {
        value: lookupNumber.value,
        symbol: lookupNumber.symbol,
        label: lookupNumber.label
    };
};
exports.getNumberFromDict = getNumberFromDict;
//# sourceMappingURL=getLookupNumber.js.map