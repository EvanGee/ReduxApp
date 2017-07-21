const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')
const apiRoutes = require('./apiRoutes')
const bodyParser = require('body-parser')
const passport = require('passport');
const mongoUtil = require("../db/connection")
const flash = require('connect-flash')
const cookieParser = require('cookie-parser');
const session      = require('express-session');
const app = express()


app.use(compress())
app.use(cookieParser())
app.use(bodyParser.json())

app.use(session({secret : "helloworld"}))
app.use(passport.initialize())
app.use(passport.session());

require('./middleware/local-login')(passport);

app.use(flash())

require('dotenv').config()

app.use("/api", apiRoutes)



// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------

if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  logger.info('Enabling webpack development and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : path.resolve(project.basePath, project.srcDir),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : 'normal',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(path.resolve(project.basePath, 'public')))

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  logger.warn(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  app.set('port', process.env.PORT || 3000);
  app.use(express.static(path.resolve(project.basePath, project.outDir)))
  var server = app.listen(app.get('port'), function() {  
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
  });
}



module.exports = app
