"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friendly_format_1 = require("@/friendly-format");
const numbers_1 = require("@/utils/mocks/numbers");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('format thousand', () => {
    (0, vitest_1.describe)('with no decimal', () => {
        (0, vitest_1.it)('should format thousand', () => {
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.THOUSAND)).toMatchInlineSnapshot('"1k"');
        });
    });
    (0, vitest_1.describe)('with decimal', () => {
        (0, vitest_1.it)('should format thousand to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.THOUSAND_FLOAT, options)).toMatchInlineSnapshot('"1.01k"');
        });
        (0, vitest_1.it)('should format thousand to 3 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 3
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.THOUSAND_FLOAT, options)).toMatchInlineSnapshot('"1.01k"');
        });
    });
});
//# sourceMappingURL=thousand.test.js.map