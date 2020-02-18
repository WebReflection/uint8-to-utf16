var uint8ToUtf16 = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi @WebReflection */
  var ceil = Math.ceil;
  var fromCharCode = String.fromCharCode;
  var encode = function encode(uint8array) {
    var extra = 0;
    var length = uint8array.length;
    var len = ceil(length / 2);
    var uint16array = new Uint16Array(len + 1);

    for (var j = 0, i = 0; i < len; i++) {
      var c = uint8array[j++] << 8;
      uint16array[i] = c + (j < length ? uint8array[j++] : extra++);
    }

    uint16array[len] = extra;
    return fromCharCode.apply(null, uint16array);
  };
  var decode = function decode(chars) {
    var codes = [];
    var length = chars.length - 1;

    for (var i = 0; i < length; i++) {
      var c = chars.charCodeAt(i);
      codes.push(c >> 8, c & 0xFF);
    }

    if (chars.charCodeAt(length)) codes.pop();
    return Uint8Array.from(codes);
  };

  exports.decode = decode;
  exports.encode = encode;

  return exports;

}({}));
