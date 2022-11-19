const mongoose = require("mongoose");

    
const postSchema = new mongoose.Schema({
    post_title: {
        type: String,
        required:true
    },
    post_description: {
        type: String,
        required: true
    },
    replies: [{
        type: String
    }]
},
    {collection: 'posts'}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;