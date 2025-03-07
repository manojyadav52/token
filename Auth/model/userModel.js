const mongoose = require('mongoose');
const bcrypt = require('bcrypt');




const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    gender:{
      type:String,
      required:true,
      enum:["male","female"],
    },
    profileImage:{
        type:String,
        default:null,
    },
    role:{
        type:String,
        required:true,
        enum:["admin","user"],
        default:"user",
    },
});


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});


// created the model 
const User = mongoose.model('User', userSchema);

module.exports = User;