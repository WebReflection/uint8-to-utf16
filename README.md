# A safe Uint8Array to utf-16 string converter

[![Build Status](https://travis-ci.com/WebReflection/uint8-to-utf16.svg?branch=master)](https://travis-ci.com/WebReflection/uint8-to-utf16) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/uint8-to-utf16/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/uint8-to-utf16?branch=master)

<sup>**Social Media Photo by [Suzanne D. Williams](https://unsplash.com/@scw1217) on [Unsplash](https://unsplash.com/)**</sup>

Compatible with any binary data and every modern, client/server, JS engine.

```js
import {encode, decode} from 'uint8-to-utf16';
// const {encode, decode} = require('uint8-to-utf16');

const utf8Binary = new Uint8Array(anyArrayBuffer);

// encode converts Uint8Array instances to utf-16 strings
const encoded = encode(utf8Binary);

// it's just like any other strings
console.log(encoded);

// decode converts utf-16 strings, encoded via this module,
// into their original Uint8Array representation
const decoded = decode(encoded);

console.assert(
  JSON.stringify([...utf8Binary]) ===
  JSON.stringify([...decoded]),
  'safe Uint8Array to utf-16 conversion'
);
```

**Please note** if you use `TextEncoder` or `TextDecoder` your encoded string _might_ lose important data in the process.

Looking for a drop in module that converts into base64 strings instead? Check [uint8-to-base64](https://github.com/WebReflection/uint8-to-base64#readme) out!
