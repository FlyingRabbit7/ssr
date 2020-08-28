import React from 'react';
//引入index 组件
import Index from '../../client/pages/index';
import { renderToString} from 'react-dom/server';
import { StaticRouter, Route} from 'react-router';
import App from '../../client/router/index';
import routeList from '../../client/router/route-config';

const pretty = require('pretty');

export default  (ctx,next)=>{

  console.log(111111111111111)

  console.log(ctx.request.path)

  //获得请求的 path
  const path = ctx.request.path;

  const html = renderToString(
    <StaticRouter location={path}>
      <App routeList={routeList}></App>
    </StaticRouter>
  );

  console.log(html)

  ctx.body=`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>my react ssr</title>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
    <script type="text/javascript" src="index.js"></script>`;

  return next();
}