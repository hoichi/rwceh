'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Decco = require("decco/src/Decco.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");

function repo_encode(v) {
  return Js_dict.fromArray(/* array */[
              /* tuple */[
                "full_name",
                Decco.stringToJson(v.fullName)
              ],
              /* tuple */[
                "html_url",
                Decco.stringToJson(v.htmlUrl)
              ]
            ]);
}

function repo_decode(v) {
  var match = Js_json.classify(v);
  if (typeof match === "number" || match.tag !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  } else {
    var dict = match[0];
    var match$1 = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict, "full_name"), null));
    if (match$1.tag) {
      var e = match$1[0];
      return /* Error */Block.__(1, [{
                  path: ".full_name" + e.path,
                  message: e.message,
                  value: e.value
                }]);
    } else {
      var match$2 = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict, "html_url"), null));
      if (match$2.tag) {
        var e$1 = match$2[0];
        return /* Error */Block.__(1, [{
                    path: ".html_url" + e$1.path,
                    message: e$1.message,
                    value: e$1.value
                  }]);
      } else {
        return /* Ok */Block.__(0, [{
                    fullName: match$1[0],
                    htmlUrl: match$2[0]
                  }]);
      }
    }
  }
}

function t_encode(v) {
  return Js_dict.fromArray(/* array */[/* tuple */[
                "items",
                Decco.arrayToJson(repo_encode, v.items)
              ]]);
}

function t_decode(v) {
  var match = Js_json.classify(v);
  if (typeof match === "number" || match.tag !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  } else {
    var match$1 = Decco.arrayFromJson(repo_decode, Belt_Option.getWithDefault(Js_dict.get(match[0], "items"), null));
    if (match$1.tag) {
      var e = match$1[0];
      return /* Error */Block.__(1, [{
                  path: ".items" + e.path,
                  message: e.message,
                  value: e.value
                }]);
    } else {
      return /* Ok */Block.__(0, [{
                  items: match$1[0]
                }]);
    }
  }
}

exports.repo_encode = repo_encode;
exports.repo_decode = repo_decode;
exports.t_encode = t_encode;
exports.t_decode = t_decode;
/* No side effect */
