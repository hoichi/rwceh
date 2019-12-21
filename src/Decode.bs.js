'use strict';

var Block = require("bs-platform/lib/js/block.js");

function mapDecodingError(param) {
  if (param.tag) {
    return /* Error */Block.__(1, [/* `DecodeError */[
                527822746,
                param[0]
              ]]);
  } else {
    return /* Ok */Block.__(0, [param[0]]);
  }
}

exports.mapDecodingError = mapDecodingError;
/* No side effect */
