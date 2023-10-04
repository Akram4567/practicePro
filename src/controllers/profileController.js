const Profile = require('../models/profileModel')
const jwt = require('jsonwebtoken')

exports.createProfile = async (req, res) => {
try{
    let reqBody = req.body;
    const newProfile = await Profile.create(reqBody)
    console.log(newProfile)
    res.status(200).send(newProfile)

}catch (e) {
    console.log(e)
}
}



exports.userLogin = async (req, res) => {
    try{
        let UserName = req.body.UserName
        let Password = req.body.Password

        const userData = await Profile.find({UserName: UserName, Password:Password})

        let payload = {exp: Math.floor(Date.now() / 1000) + (60 * 60), userData: userData} 
        let token = jwt.sign(payload, "SecretKey123456789")
        
        console.log(userData)
        res.status(200).json({token, userData})
       
    
    }catch (e) {
        console.log(e)
    }
    }




    exports.selectProfile = async (req, res) => {
        try{
           let UserName = req.headers.UserName
           const selectData = await Profile.find({UserName:UserName})
           res.status(200).json({selectData})
        
        }catch (e) {
            console.log(e)
        }
        }