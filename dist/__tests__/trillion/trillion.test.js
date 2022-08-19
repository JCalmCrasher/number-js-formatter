"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const friendly_format_1 = require("@/friendly-format");
const numbers_1 = require("@/utils/mocks/numbers");
const vitest_1 = require("vitest");
(0, vitest_1.describe)('format trillion', () => {
    (0, vitest_1.describe)('with no decimal', () => {
        (0, vitest_1.it)('should format trillion', () => {
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION)).toMatchInlineSnapshot('"1tn"');
        });
    });
    (0, vitest_1.describe)('with decimal', () => {
        (0, vitest_1.it)('should format trillion to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 3
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.106tn"');
        });
        (0, vitest_1.it)('should format trillion to 3 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.1058tn"');
        });
    });
    (0, vitest_1.describe)('with `-il` option', () => {
        (0, vitest_1.it)('should format trillion to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2,
                form: '-il'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.11tril"');
        });
        (0, vitest_1.it)('should format trillion to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-il'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.1058tril"');
        });
    });
    (0, vitest_1.describe)('with `-ill` option', () => {
        (0, vitest_1.it)('should format trillion to 2 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 2,
                form: '-ill'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.11trill"');
        });
        (0, vitest_1.it)('should format trillion to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-ill'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.1058trill"');
        });
    });
    (0, vitest_1.describe)('with `-ln` option', () => {
        (0, vitest_1.it)('should format trillion to 3 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 3,
                form: '-ln'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.106tln"');
        });
        (0, vitest_1.it)('should format trillion to 4 decimal places', () => {
            const options = {
                noOfDigitsAfterDecimal: 4,
                form: '-ln'
            };
            (0, vitest_1.expect)((0, friendly_format_1.friendlyFormat)(numbers_1.TRILLION_FLOAT, options)).toMatchInlineSnapshot('"1.1058tln"');
        });
    });
});
//# sourceMappingURL=trillion.test.js.map