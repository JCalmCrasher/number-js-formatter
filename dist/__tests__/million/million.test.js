"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friendly_format_1 = require("@/friendly-format");
const numbers_1 = require("@/utils/mocks/numbers");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('format million', () => {
    (0, vitest_1.describe)('with no decimal', () => {
        (0, vitest_1.it)('should format million', () => {
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION)).toMatchInlineSnapshot('"1m"');
        });
    });
    (0, vitest_1.describe)('with decimal', () => {
        (0, vitest_1.it)('should format million to 3 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 3
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.924m"');
        });
        (0, vitest_1.it)('should format million to 3 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.9235m"');
        });
    });
    (0, vitest_1.describe)('with `-il` option', () => {
        (0, vitest_1.it)('should format million to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2,
                form: '-il'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.92mil"');
        });
        (0, vitest_1.it)('should format million to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-il'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.9235mil"');
        });
    });
    (0, vitest_1.describe)('format - with `-ill` option', () => {
        (0, vitest_1.it)('should format million to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2,
                form: '-ill'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.92mill"');
        });
        (0, vitest_1.it)('should format million to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-ill'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.9235mill"');
        });
    });
    (0, vitest_1.describe)('format - with `-ln` option', () => {
        (0, vitest_1.it)('should format million to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2,
                form: '-ln'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.92mln"');
        });
        (0, vitest_1.it)('should format million to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-ln'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.MILLION_FLOAT, options)).toMatchInlineSnapshot('"1.9235mln"');
        });
    });
});
//# sourceMappingURL=million.test.js.map