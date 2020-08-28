"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRouterDom = require("react-router-dom");

var _index = _interopRequireDefault(require("../router/index"));

var _routeConfig = _interopRequireDefault(require("../router/route-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//路由配置
//渲染入口
_reactDom.default.hydrate( /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_index.default, {
  routeList: _routeConfig.default
})), document.getElementById('root'));