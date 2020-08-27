"use strict";

var _test = _interopRequireDefault(require("./test.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react');

var _require = require('react-dom/server'),
    renderToString = _require.renderToString;

var http = require('http');

//组件
// class Index extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     handlerClick(){
//        alert('一起来玩 react ssr 啊');
//     }
//     render() {
//         return <h1 onClick={this.handlerClick}>click here!</h1>
//     }
// }
//服务
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var html = renderToString( /*#__PURE__*/React.createElement(_test.default, null));
  res.end("<!DOCTYPE html>\n\t\t<html lang=\"en\">\n\t\t<head>\n\t\t    <meta charset=\"UTF-8\">\n\t\t    <title>React SSR</title>\n\t\t</head>\n\t\t<body>\n\t\t    <div id=\"root\">\n\t\t       ".concat(html, "\n\t\t    </div>\n\t\t</body>\n\t\t</html>"));
}).listen(9001);
console.log('server start. 9001');
