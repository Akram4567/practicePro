const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
    {
        FirstName: {type:String,},
        LastName: {type:String},
        Email: {type:String},
        Phone: {type:String},
        City: {type:String},
        UserName: {type:String, unique:true},
        Password: {type:String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const Profile = mongoose.model("Profiles", profileSchema)

module.exports = Profile