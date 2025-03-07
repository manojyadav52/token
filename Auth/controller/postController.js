const Post = require('./../model/postModel');




const imgpost = async (req,res)=>{
    try{
        const id = req.user.id;
        console.log("id is:,", id);
        if(!id) return res.status(400).json({message:'id is required'});

        if(!req.file) return res.status(400).json({message:"file is required"});
        const postURL = req.file ? `http://localhost:8080/post/${req.file.filename}`: null;
        const data ={...req.body, postId:req.user.id, postImag:postURL}

        const getuser =await Post(data);
        console.log("data geting", getuser);
        await getuser.save();
        res.status(200).json({message:'user post uploaded succesfully', getuser});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server issue"})
    }
};

module.exports = imgpost;