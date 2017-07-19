const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const MongoUtils = require('../../db/connection')
const db = require('../../db/connection')
const collections = require('../../db/collections')
passport.use(new LocalStrategy(

  (username, password, done) => {
    //do bcrypt stuff here

    db.findDocuments(collections.USER_DATA, { username, password })
      .then((dbRes) => {
        /*
        passport.serializeUser(function(username, done) {
          done(null, username);
        });

        passport.deserializeUser(function(username, done) {
          done(null, username);
        });
        */
        return done(null, username)
      })
      .catch(err => {
        console.log("oh shit\n" + err)
        return done(null, false, { message: "Incorrect username or password"})
      })

  }

/*
  function(username, password, done) {
    console.log(username, password)

    db({ username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
*/
));