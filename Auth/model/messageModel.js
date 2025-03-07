const mongoose = require('mongoose');



const messageSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    messages:{
        type:String,
    },
    timestamp:{
        type:Date,
        default:Date.now,
    },
});

const Message = mongoose.model("Message", messageSchema);

// exports the Message Schema 
module.exports = Message;