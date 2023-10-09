const mongoose = require('mongoose')

const OTPSchema = mongoose.Schema(
    {
        Email:{type:String},
        OTP:{type:String},
        Status:{type:Number, defsult:0}
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const OTPModel = mongoose.model('otps', OTPSchema)

module.exports = OTPModel;