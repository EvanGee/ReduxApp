
const LocalStrategy = require('passport-local').Strategy;
const MongoUtils = require('../../db/connection')
const db = require('../../db/connection')
const collections = require('../../db/collections')

module.exports = (passport) => {
  

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
      done(null, user);
  });


  passport.use("local-login", new LocalStrategy(
    {
      usernameField : "username",
      passwordField : "password",
      passReqToCallback : true
    },

    (req, username, password, done) => {
      //do bcrypt stuff here

      db.findOne(collections.USER_DATA, { username, password })
        .then((dbRes) => {
          if (dbRes === null) return done(null, false, { message: "wrong username or password" })
          else return done(null, username)

        })
        .catch(err => {
          return done(err);
        })

    }
  ));

}