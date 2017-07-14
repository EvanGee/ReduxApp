var express = require('express')
var router = express.Router()
const mongoUtil = require("../../db/connection")
const dbActions = require ("../../db/dbActions")
const models = require("../../db/models")
const db = mongoUtil.getDb()
console.log("hello")

// middleware that is specific to this router
router.use(function(req, res, next){
  next()
})

router.post('/updateState', function (req, res) {
  console.log(req.body)
  console.log(req.body.LogInPage)
  /*
  dbActions.insertDocuments(db, "data", [models.user("evan", {"state": req.body})])
  .then(function(){
    console.log("updated state")
  })
  .catch(function(err){
    console.log("oh shit\n" + err)
  })
  */
  res.send('updated State')
  
})


router.post('/LogIn', function (req, res) {

  /*
  dbActions.insertDocuments(db, "data", [models.user("evan", {"state": req.body})])
  .then(function(){
    console.log("updated state")
  })
  .catch(function(err){
    console.log("oh shit\n" + err)
  })
  */
  res.send('Logged In')
  
})


router.get('/getState', function (req, res) {
  dbActions.findDocuments(db, "data", models.user("evan", {"data": "stuff"}))
  .then(function(data){
    console.log(data)
    res.send(data)
  })
  .catch(function(err){
    console.log("err\n" + err)
  })
})

module.exports = router