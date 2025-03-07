const Message = require('./../model/messageModel');



const getmessage = async (req,res)=>{
     try{
        const msg = await Message.find().sort({timestamp: 1});
        console.log("your msg is:",msg);
        res.status(200).json({message:"you message is", status:true, data:msg});
     }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server issue", status:false, data:null});
     }
}

const savemessage = async (req,res)=>{
    try{
        const newMessage = new Message({userName,messages});
        console.log("your new message is: ", newMessage);
        await newMessage.save();
    }catch(error){
        console.error(error);
        res.status(500).json({message:"internal server issue", status:false,data:null});
    }
}