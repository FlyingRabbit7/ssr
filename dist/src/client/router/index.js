"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _layout = _interopRequireDefault(require("../app/layout"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//服务端也会用到所以通过参数的方式将配置传递进来
function RouterIndex(_ref) {
  var routeList = _ref.routeList;
  return /*#__PURE__*/_react.default.createElement(_layout.default, null, " //\u516C\u5171\u7EC4\u4EF6", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, routeList.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, _extends({
      key: item.path
    }, item));
  })));
}

var _default = RouterIndex;
exports.default = _default;