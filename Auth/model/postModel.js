const mongoose = require('mongoose');




const postModel = new mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user',
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    postImag:{
        type:String,
        required:true,
    },
});


const Post = mongoose.model('Post', postModel);

module.exports = Post;