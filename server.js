const Koa = require('koa2');
const koaStatic =require('koa-static');
const path = require('path');

const reactSsr  = require('./dist/src/server/middlewares/react-ssr').default;

console.log(reactSsr)

const app = new Koa();

app.use(koaStatic(
  path.join(__dirname, './dist/static')
));

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(reactSsr);

app.listen(3000);

console.log('server run 3000')