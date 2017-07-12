const express = require('express')
const path = require('path')
const webpack = require('webpack')
const logger = require('../build/lib/logger')
const webpackConfig = require('../build/webpack.config')
const project = require('../project.config')
const compress = require('compression')

require('dotenv').config()
const app = express()
app.use(compress())


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



//some fun with mongo DB

const MongoClient = require('mongodb').MongoClient
const dbFormat = require('util').format
const assert = require('assert')

const user = encodeURIComponent('myTester')
const password = encodeURIComponent('xyz123')
const authMechanism = "DEFAULT"
const dbActions = require("../db/dbActions");
// Connection URL
//const url = dbFormat('mongodb://%s:%s@localhost:27017/myproject?authMechanism=%s', user, password, authMechanism);
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  /*
  dbActions.insertDocuments(db, "document", [{a:1, b:2, c:3}])
  .then(function(result){
    console.log("success!!")
    db.close()
  })
  .catch(function(err){
    console.log("oops, Error: \n" + err)
  })
  
  */
});


module.exports = app
