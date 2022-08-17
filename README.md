# number-js-formatter

<p>Number-js-formatter is a JavaScript library that formats numbers in a human-friendly way.</p>

<p>Perhaps a number like 1000000 is coming from an API you're using or you just want to display a number in a more friendly format; number-js-formatter helps you do that with ease.</p>

## Requirements
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/)(v14+ or latest LTS)
## 📦 Install
```sh
npm install number-js-formatter
# or
yarn add number-js-formatter
# or
pnpm add number-js-formatter
```

## 🚀 Quick start

This library is minimal and doesn't require any configuration.

```js
import { friendlyFormat } from 'number-js-formatter';

const num1 = 1_923_500.156;
const num2 = 1_004_850_000.91332;
const num3 = 1105_830_000_302.9946;

friendlyFormat(num1, { noOfDigitsAfterDecimal: 3 }); // "1.924m"
friendlyFormat(num2, { noOfDigitsAfterDecimal: 4, orm: '-ln' }); // "1.0049bln"
friendlyFormat(num3, { noOfDigitsAfterDecimal: 3 }); // "1.106tn"
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
            <td>Formats a number into a human-friendly number.
            <td>
                <ul>
                    <li> <code>number:</code> <span>The value to be formatted</span> </li>
                    <li> <code>noOfDigitsAfterDecimal(optional): </code> <span>Number of digits after the decimal point</span> </li>
                    <li> <code>form(optional): </code> <span>short form to use (e.g <code>mill</code>, <code>tln</code>)</span> </li>
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

## Limitations

- Doesn't support quadrillions numbers
- Locale support comming soon

## 🔌 Contributing

<p>Please open an issue or pull request if you have any suggestions or feedback.</p>
