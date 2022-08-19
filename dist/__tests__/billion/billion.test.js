"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friendly_format_1 = require("@/friendly-format");
const numbers_1 = require("@/utils/mocks/numbers");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('billion', () => {
    (0, vitest_1.describe)('format - with no decimal', () => {
        (0, vitest_1.it)('should format billion', () => {
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION)).toMatchInlineSnapshot('"1bn"');
        });
        (0, vitest_1.describe)('format - with decimal', () => {
            (0, vitest_1.it)('should format billion to 3 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 3
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1.005bn"');
            });
            (0, vitest_1.it)('should format billion to 4 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 4
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1.0049bn"');
            });
        });
        (0, vitest_1.describe)('format - with `-il` option', () => {
            (0, vitest_1.it)('should format billion to 2 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 2,
                    form: '-il'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1bil"');
            });
            (0, vitest_1.it)('should format billion to 4 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 4,
                    form: '-il'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1.0049bil"');
            });
        });
        (0, vitest_1.describe)('format - with `-ill` option', () => {
            (0, vitest_1.it)('should format billion to 2 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 2,
                    form: '-ill'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1bill"');
            });
            (0, vitest_1.it)('should format billion to 4 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 4,
                    form: '-ill'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1.0049bill"');
            });
        });
        (0, vitest_1.describe)('format - with `-ln` option', () => {
            (0, vitest_1.it)('should format billion to 2 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 2,
                    form: '-ln'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1bln"');
            });
            (0, vitest_1.it)('should format billion to 4 decimal places', () => {
                const options = {
                    noOfDigitsAfterDecimal: 4,
                    form: '-ln'
                };
                (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.BILLION_FLOAT, options)).toMatchInlineSnapshot('"1.0049bln"');
            });
        });
    });
});
//# sourceMappingURL=billion.test.js.map