import mongoose from "mongoose";

//framework for user
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//check if already schema otherwise create one
module.exports = mongoose.models.User || mongoose.model('User',userSchema)