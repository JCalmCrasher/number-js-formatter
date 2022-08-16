# number-js-formatter

<p>Number-js-formatter is a JavaScript library that formats numbers in a human-friendly way.</p>

<p>Perhaps a number like 1000000 is coming from an API you're using or you just want to display a number in a more friendly format; number-js-formatter helps you do that with ease.</p>

## 📦 Install

```sh
npm install number-js-formatter
# or
yarn add number-js-formatter
```

## 🚀 Quick start

This library is minimal and doesn't require any configuration.

```js
import { friendlyFormat } from 'number-js-formatter';

const num1 = 1000_000;
const num2 = 1056791;
const num3 = 1_004_850_000.91332;
const options: FormatOptions = {
    noOfDigitsAfterDecimal: 2
};

friendlyFormat(num1); // "1m"
friendlyFormat(num2, 3); // "1.057m"
friendlyFormat(num3); // "1k"
```

## ⚒️ Methods

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Parameter</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>friendlyFormat</code></td>
            <td>Formats a number into a human-friendly string.
            <td>
                <ul>
                    <li> <code>number: number</code> <span>The value to be formatted</span> </li>
                    <li> <code>digits(optional): number</code> <span>Number of digits after the decimal point</span> </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

# 🔨 Args 

<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Args</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=2><code>friendlyFormat</code></td>
            <td><code>number: number</code></td>
            <td>
                number to be formatted
            </td>
        </tr>
          <tr>
            <td><code>FormatOptions</code> object</td>
            <td>
                parameters to use for formatting
            </td>
        </tr>
    </tbody>
</table>

## 💡 Features

- Format options in different short forms.
- Strongly typed; number-js-formatter is purely written in TypeScript.
- Tested.

## Limitations

- Doesn't support quadrillions numbers
- Locale support comming soon

## 🔌 Contributing

<p>Please open an issue or pull request if you have any suggestions or feedback.</p>
