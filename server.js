const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const koaStatic = require('koa-static');
const Vue = require('vue');
const { createBundleRenderer } = require('vue-server-renderer');

const resolve = file => path.resolve(__dirname, file)

const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template: fs.readFileSync(resolve('./index.html'), 'utf-8'),
  clientManifest: require('./dist/vue-ssr-client-manifest.json'),
});

app.use(koaStatic(path.join(__dirname, 'dist')));

app.use(async ctx => {

    renderer.renderToString({title: 'DJLXS', url: ctx.req.url}, (err, html) => {

      console.log('url', ctx.req.url);
      console.log('html', html);


      if (err) {
        ctx.response.status = err.code;
        ctx.body = err;
        return
      }

      ctx.body = html;

    })

});

app.listen(3000, function () {
  console.log('server is listening on port 3000')
});
