'use strict';

var App = require("./App.bs.js");
var React = require("react");
var Helpers = require("./Helpers/Helpers.bs.js");
var ReactDom = require("react-dom");
var ExampleStyles = require("./Helpers/ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles.style;

ReactDom.render(React.createElement(App.make, { }), Helpers.makeContainer("App"));

exports.style = style;
/* style Not a pure module */
