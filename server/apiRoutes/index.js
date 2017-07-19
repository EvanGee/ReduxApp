var express = require('express')
var router = express.Router()
const db = require("../../db/connection")
const models = require("../../db/models")
const passport = require("passport")
const collections = require("../../db/collections")


// middleware that is specific to this router
router.use(function(req, res, next){
  next()
})

router.post('/updateState', function (req, res) {
  console.log(req.body)
  console.log(req.body.LogInPage)

  db.insertDocuments("data", [models.user("evan", {"state": req.body})])
  .then(function(){
    console.log("updated state")
  })
  .catch(function(err){
    console.log("oh shit\n" + err)
  })

  res.send('updated State')
  
})


router.post('/login', 
  passport.authenticate('local', {session: false }), 
  (req, res) => {                            

  res.send(req.body)
  
})

router.post('./asdf', (req, res) => {
  db.findDocuments("username")
})


router.post('/register', (req, res) => {

})

module.exports = router