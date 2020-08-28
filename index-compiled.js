"use strict";

var Koa = require('koa');

var app = new Koa();
app.use(function (ctx, next) {
  ctx.body = 'hello world';
});
app.listen(3000);
console.log('server run 3000');
