var express = require('express')
var router = express.Router()
const mongoUtil = require("../../db/connection")
const dbActions = require ("../../db/dbActions")
const models = require("../../db/models")
const db = mongoUtil.getDb()


// middleware that is specific to this router
router.use(function(req, res, next){
  console.log("middleware")
  next()
})
// define the home page route
router.get('/birds', function (req, res) {
  dbActions.insertDocuments(db, "data", [models])
  .then(function(){
    console.log("inserted Data")
  })
  .catch(function(err){
    console.log("oh shit\n" + err)
  })
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router