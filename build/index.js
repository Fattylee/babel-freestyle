"use strict";

var _util = _interopRequireDefault(require("./util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("this is from index");
console.log("this is from util: ", _util["default"].sum(2, 3));