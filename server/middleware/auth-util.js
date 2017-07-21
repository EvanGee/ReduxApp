const expressJwt = require('express-jwt')
const jwt = require('jsonwebtoken')



module.exports = {


    generateToken : function (req, res, next) {
    req.token = jwt.sign({
        id: req.user
    }, 'server secret', {
        expiresIn: 120
    })
    next()
    },

    authenticate : expressJwt({
        secret: "server secret",
        credentialsRequired: false,
        getToken: function fromHeaderOrQuerystring (req) {
            let tokenInd = req.rawHeaders.indexOf("Cookie") + 1
            let token = req.rawHeaders[tokenInd]
            token = token.split("=")
            token = token[1]
        }
    })

}