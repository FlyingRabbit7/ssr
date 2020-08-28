"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("../../client/pages/index"));

var _server = require("react-dom/server");

var _reactRouter = require("react-router");

var _index2 = _interopRequireDefault(require("../../client/router/index"));

var _routeConfig = _interopRequireDefault(require("../../client/router/route-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入index 组件
var pretty = require('pretty');

var _default = function _default(ctx, next) {
  console.log(111111111111111);
  console.log(ctx.request.path); //获得请求的 path

  var path = ctx.request.path;
  var html = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_reactRouter.StaticRouter, {
    location: path
  }, /*#__PURE__*/_react.default.createElement(_index2.default, {
    routeList: _routeConfig.default
  })));
  console.log(html);
  ctx.body = "<!DOCTYPE html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <title>my react ssr</title>\n      </head>\n      <body>\n        <div id=\"root\">".concat(html, "</div>\n      </body>\n    </html>\n    <script type=\"text/javascript\" src=\"index.js\"></script>");
  return next();
};

exports.default = _default;