const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    try{
        let token = req.headers.token
        console.log(token)
        let data = jwt.verify(token, "SecretKey123456789")
        console.log(data)
        let UserName = data.userData[0].UserName
        req.headers.UserName = UserName
        next()
    }catch(e) {
        console.log(e)
    }
}