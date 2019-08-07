const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const koaRouter = require('koa-router');
const koaStatic = require('koa-static');
const Vue = require('vue');
const { createBundleRenderer } = require('vue-server-renderer');

const resolve = file => path.resolve(__dirname, file)
const router = new koaRouter();

const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: fs.readFileSync(resolve('./dist/index.ssr.html'), 'utf-8'),
  clientManifest: require('./dist/vue-ssr-client-manifest.json'),
});


router.get('/', async ctx => {
  console.log('zegsrgsrg');
  ctx.body = await new Promise((resolve, reject) => {
    renderer.renderToString({title: 'DJLXS', url: ctx.req.url}, (err, data) => {
      console.log('url', ctx.req.url);
      console.log('html', html);

      if (err) {
        reject(err);
        return;
      }
      resolve(data)

    })
  });


});

app.use(koaStatic(path.join(__dirname, 'dist')));
app.use(router.routes());

app.listen(3700, function () {
  console.log('server is listening on port 3700')
});
