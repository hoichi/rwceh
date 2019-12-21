'use strict';

var React = require("react");
var Decode = require("./Decode.bs.js");
var GhRepo = require("./GhRepo.bs.js");
var UseFetch = require("./UseFetch.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function App(Props) {
  var param = UseFetch.mapOk(UseFetch.useFetch("https://api.github.com/search/repositories?q=language:reason&sort=stars&order=desc"), (function (r) {
          return Decode.mapDecodingError(GhRepo.t_decode(r));
        }));
  if (param) {
    var match = param[0];
    if (match.tag) {
      var match$1 = match[0];
      if (match$1[0] >= 527822746) {
        var err = match$1[1];
        return React.createElement("div", undefined, React.createElement("h2", undefined, "Decode error!"), React.createElement("ul", undefined, React.createElement("li", undefined, err.path), React.createElement("li", undefined, err.message), React.createElement("li", undefined, JSON.stringify(err.value))));
      } else {
        return React.createElement("div", undefined, "Fetch error!");
      }
    } else {
      return React.createElement("ul", undefined, Belt_Array.map(match[0].items, (function (param) {
                        var fullName = param.fullName;
                        return React.createElement("li", {
                                    key: fullName
                                  }, React.createElement("a", {
                                        href: param.htmlUrl
                                      }, fullName));
                      })));
    }
  } else {
    return "Loading...";
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
