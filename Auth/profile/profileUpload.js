const multer = require('multer');
const User = require('./../model/userModel');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const distiFile = path.resolve(__dirname, './../uploads');
        cb(null, distiFile);
    },
    filename: function(req,file,cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});


const upload = multer({storage});


const uploadProfile = async (req,res)=>{
    try{
         const id = req.user.id
         console.log("your id is:", id);
         if(!id) return res.status(400).json({message:"file has been required"});

        if(!req.file) return res.status(400).json({message:"file is required"});

        const getdata = await User.findById(id);
        console.log(getdata);
        if(!getdata) return res.status(400).json({message:"user not found"});
        getdata.profileImage=`http://localhost:8080/profile/${req.file.filename}`;
        await getdata.save();
        res.status(200).json({message:"user profile uploaded succesfuly", status:true, data:getdata});
    }catch(error){
        console.error(error);
        res.status(400).json({message:"internal server issue", status:false, data:null});
    }
}


module.exports = {
    uploadProfile,
    upload,
}