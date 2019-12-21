'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function useFetch(url) {
  var match = React.useState((function () {
          return /* Fetching */0;
        }));
  var setState = match[1];
  React.useEffect((function () {
          fetch(url).then((function (prim) {
                      return prim.json();
                    })).then((function (json) {
                    return Promise.resolve(Curry._1(setState, (function (param) {
                                      return /* Complete */[/* Ok */Block.__(0, [json])];
                                    })));
                  })).catch((function (error) {
                  var error$1 = /* `FetchError */[
                    -390555314,
                    error
                  ];
                  return Promise.resolve(Curry._1(setState, (function (param) {
                                    return /* Complete */[/* Error */Block.__(1, [error$1])];
                                  })));
                }));
          return ;
        }), /* array */[url]);
  return match[0];
}

function mapOk(t, f) {
  if (t) {
    var match = t[0];
    if (match.tag) {
      return t;
    } else {
      return /* Complete */[Curry._1(f, match[0])];
    }
  } else {
    return /* Fetching */0;
  }
}

exports.useFetch = useFetch;
exports.mapOk = mapOk;
/* react Not a pure module */
