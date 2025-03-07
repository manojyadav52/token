const User = require('./../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRETE_KEY = 'baskarpagalirulayegikya';




const register = async (req,res)=>{
    const {fullName, email, password,phone,gender}=req.body;
    try{
        const getdata = new User({fullName, email, password,phone,gender});
        console.log("user registed here:", getdata);
        if(!getdata) return res.status(400).json({message:"user not registerd here", status:false,data:null});

        await getdata.save();
        res.status(200).json({message:"user registerd succesfuly", status:true, data:getdata});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal Server issue", status:false, data:null});
    }
};


// login

 login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const getdata = await User.findOne({email});
        console.log("get data is:", getdata);
        if(!getdata) return res.status(400).json({message:"invalid emaill", status:false ,data:null});

        // isValid password 
        const isValidPassword = await bcrypt.compare(password, getdata.password);
        console.log(isValidPassword);
        if(!isValidPassword) return res.status(400).json({message:"invalid password", status:false, data:null});

        // token 
        const token = await jwt.sign({id:getdata._id, email:getdata.email, phone:getdata.phone }, SECRETE_KEY, { expiresIn:'1h'});
        console.log("generated token is: ",token)

        res.status(200).json({message:"user login sucessfuly", status:true, data:getdata, token});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server issue", status:false, data:null});
    }
};

// expor the all controller 
module.exports ={
    register,
    login,
}