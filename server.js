const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const koaRouter = require('koa-router');
const koaStatic = require('koa-static');
const { createBundleRenderer } = require('vue-server-renderer');

const resolve = file => path.resolve(__dirname, file);
const router = new koaRouter();

const serverBundle = fs.readFileSync('./dist/bundle.server.js', 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  // runInNewContext: false,
  template: fs.readFileSync(resolve('./dist/index.ssr.html'), 'utf-8'),
  // clientManifest: require('./dist/vue-ssr-client-manifest.json'),
});

app.use(koaStatic(path.resolve(__dirname, 'dist')));

router.get('*', async ctx => {
  console.log('进来了');
  ctx.body = await new Promise((resolve, reject) => {
    //
    renderer.renderToString({title: 'DJLXS', url: ctx.req.url}, (err, data) => {

      if (err) {
        resolve(err.code);
        return;
      }
      resolve(data)

    });
  });


});

app.use(router.routes());

app.listen(3700, function () {
  console.log('server is listening on port 3700')
});
