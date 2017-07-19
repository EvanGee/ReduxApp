const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const MongoUtils = require('../../db/connection')
const db = require('../../db/connection')
const collections = require('../../db/collections')
passport.use(new LocalStrategy(

  (username, password, done) => {
    //do bcrypt stuff here
    
    db.findOne(collections.USER_DATA, { username, password })
      .then((dbRes) => {
        console.log(dbRes)
        if (dbRes === null) return done(null, false, {message : "wrong username or password"})
        else return done(null, username)

      })
      .catch(err => {
        return done(err);
      })

  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});