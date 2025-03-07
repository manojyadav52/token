const jwt = require('jsonwebtoken');
const SECRETE_KEY = 'baskarpagalirulayegikya';


const verfyToken = async (req,res,next)=>{
    const authHeader = req.header('Authorization');
    console.log(authHeader);

    const token = authHeader && authHeader.startsWith('Bearer') ? authHeader.split(' ')[1] : null;
    console.log("middlware token is: ", token);
    if(!token) return res.status(400).json({message:"no token provided"});

    try{
        const decoded = await jwt.verify(token, SECRETE_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    }catch(error){
        console.error(error);
        res.status(400).json({message:"invalid and expired token"});
    }
};

module.exports = verfyToken;