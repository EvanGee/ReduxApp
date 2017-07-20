var express = require('express')
var router = express.Router()
const db = require("../../db/connection")
const models = require("../../db/models")
const passport = require("passport")
const collections = require("../../db/collections")

const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')

function generateToken(req, res, next) {
  req.token = jwt.sign({
    id: req.user
  }, 'server secret', {
    expiresIn: 120
  })
  next()
}

const authenticate = expressJwt({
  secret: 'server secret',
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring (req) {
    let tokenInd = req.rawHeaders.indexOf("Cookie") + 1
    let token = req.rawHeaders[tokenInd]
    token = token.split("=")
    token = token[1]
  }
  })


// middleware that is specific to this router
router.use(function (req, res, next) {
  next()
})

router.post('/updateState', function (req, res) {
  console.log(req.body)
  console.log(req.body.LogInPage)

  db.insertDocuments("data", [models.user("evan", { "state": req.body })])
    .then(function () {
      console.log("updated state")
    })
    .catch(function (err) {
      console.log("oh shit\n" + err)
    })

  res.send('updated State')

})
//not setting client side cookies
router.post('/login',
  passport.authenticate('local', { session: false }),
  generateToken,
  (req, res) => {
    res.cookie('access_token', req.token)
  })

router.get('/register',
  authenticate,
  (req, res) => {

  })

module.exports = router