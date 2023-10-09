const Profile = require('../models/profileModel')
const OTPModel = require('../models/OTPModel')
const jwt = require('jsonwebtoken')
const SendEmailUtility = require('../utility/SendEmailUtility')

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
        let Email = req.body.Email
        let Password = req.body.Password

        const userData = await Profile.find({Email,Password})

        let payload = {exp: Math.floor(Date.now() / 1000) + ( 24*60 * 60), Email:Email} 
        let token = jwt.sign(payload, "SecretKey123456789")
        
        console.log(userData)
        res.status(200).json({token, userData})
       
    
    }catch (e) {
        console.log(e)
    }
 }




exports.selectProfile = async (req, res) => {
    try{
        let Email = req.headers.Email
        const selectData = await Profile.find({Email:Email})
        res.status(200).json({selectData})
        
    }catch (e) {
        console.log(e)
    }
}


exports.updateProfile = async (req, res) => {
    let Email = req.headers.Email
    let reqBody = req.body
    try{
        const updateData = await Profile.updateOne({Email:Email}, reqBody)
        console.log(reqBody)
        res.status(200).send(updateData)
    }catch(e) {
        console.log(e.message)
    }
}



exports.deleteProfile = async (req, res) => {
    let Email = req.headers.Email
    
    try{
        const updateData = await Profile.deleteOne({Email})
        
        res.status(200).send(updateData)
    }catch(e) {
        console.log(e.message)
    }
}
        



exports.emailVerification = async (req, res) => {
    try{
        let Email = req.headers.Email
        let OTP = Math.floor(100000 + Math.random() * 900000)
        let EmailText = `your Verification code is ${OTP}`
        let EmailSubject = "your verification code has been sent"
        let Status = 0;

        await SendEmailUtility(Email, EmailText, EmailSubject)

        const OTPData = await OTPModel.create({Email:Email, OTP:OTP, Status:Status})
        console.log(OTPData)
        res.status(200).send({status:"success", data: OTPData})

    }catch(e) {
        console.log(e)

    }
    
}




exports.OTPVerification = async (req, res) => {
    try{
        let Email = req.body.Email
        let OTP = req.body.OTP
        let Status = 0;
        let updateStatus = 1;

        const OTPData = await OTPModel.find({Email:Email, OTP:OTP, Status:Status}).count()
        if(OTPData === 1) {
            const updateStatusData = await OTPModel.updateOne({Email:Email, OTP:OTP, Status:Status}, {Status:updateStatus})
            res.status(200).json({status: 'success',data:updateStatusData})
        }else {
            res.status(200).json({status: 'fail'})
        }

    }catch(e) {
        console.log(e)

    }
    
}