'use strict';
/*! (c) Andrea Giammarchi @WebReflection */

const {ceil} = Math;
const {fromCharCode} = String;

const encode = uint8array => {
  let extra = 0;
  const output = [];
  const {length} = uint8array;
  const len = ceil(length / 2);
  for (let j = 0, i = 0; i < len; i++)
    output.push(
      fromCharCode(
        (uint8array[j++] << 8) +
        (j < length ? uint8array[j++] : extra++)
      )
    );
  output.push(fromCharCode(extra));
  return output.join('');
};
exports.encode = encode;

const decode = chars => {
  const codes = [];
  const length = chars.length - 1;
  for (let i = 0; i < length; i++) {
    const c = chars.charCodeAt(i);
    codes.push(c >> 8, c & 0xFF);
  }
  if (chars.charCodeAt(length))
    codes.pop();
  return Uint8Array.from(codes);
};
exports.decode = decode;
