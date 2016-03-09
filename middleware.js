const config = require('./config');
const serveStatic = require('serve-static');

module.exports = (opts) => {
  opts = opts || {}; // eslint-disable-line no-param-reassign
  opts.getAuth = opts.getAuth || ((req, callback) => callback(null, {}));
  const middlewares = [];

  function webpackRuntime(configPath) {
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require(configPath);
    const webpack = require('webpack');

    const compiler = webpack(webpackConfig);
    middlewares.push(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }));
    middlewares.push(webpackHotMiddleware(compiler));
  }

  if (opts.hot) {
    webpackRuntime('./webpack.config');
  }

  if (opts.localBundle) {
    middlewares.push(serveStatic(`${__dirname}/dist`));
  }

  middlewares.push((req, res) => {
    const cdn = `//${config.cloudfront.domain}`;
    function path(name) {
      if (opts.hot || opts.localBundle) return `/${name}`;
      return `//${config.cloudfront.domain}/app/${config.bundle.version}/${name}`;
    }

    function send(initialState) {
      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>${config.title}</title>
            <link rel="stylesheet" href="${cdn}/vendor/bootstrap-3.3.6/css/bootstrap.min.css"/>
          </head>
          <body>
            <div id='root'></div>
            <script src="${cdn}/vendor/jquery-1.11.3.min.js"></script>
            <script src="${cdn}/vendor/bootstrap-3.3.6/js/bootstrap.min.js"></script>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
            <script src="${path('app.bundle.js')}"></script>
          </body>
        </html>
      `);
    }

    if (req.method === 'GET' && req.accepts('html')) {
      opts.getAuth(req, (err, auth) => {
        const initialState = { };
        if (!err) {
          initialState.auth = auth;
        }
        send(initialState);
      });
    }
  });

  return middlewares;
};
