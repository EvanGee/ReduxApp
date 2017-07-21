var express = require('express')
var router = express.Router()
const db = require("../../db/connection")
const models = require("../../db/models")
const passport = require("passport")
const collections = require("../../db/collections")
const auth = require("../middleware/auth-util")



function isLoggedIn(req, res, next) {
  console.log(req.user)
  console.log(req._passport)
  if (req.isAuthenticated())
    return next();
  else res.send("not logged in")
}


router.post('/login',
  passport.authenticate('local-login', { session: true }),
  (req, res) => {
    req.logIn(req.user, (err) => {
      if (err) { return next(err); }
      return res.send({ success: true, user: req.user });
    });
  })

router.get('/register',
  (req, res) => {

    console.log(req.user)
  })

router.get("/logout",
  (req, res, next) => {
    req.logout()
    res.send("loggout")
  })



module.exports = router

