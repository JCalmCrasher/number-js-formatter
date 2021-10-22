import lookup from "./number-lookup";

export function friendlyFormat(number: number, digits: number = 0) {
    const lookupNumbers = lookup;

    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;

    let result = lookupNumbers.slice().reverse().find(function (item) {
        return number >= item.value;
    });

    return result ? (number / result.value).toFixed(digits).replace(regex, "$1") + result.symbol : "0";
}