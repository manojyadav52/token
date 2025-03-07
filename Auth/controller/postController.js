const Post = require('./../model/postModel');




const imgpost = async (req,res)=>{
    try{
        const id = req.user.id;
        console.log("id is:,", id);
        if(!id) return res.status(400).json({message:'id is required'});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server issue"})
    }
}