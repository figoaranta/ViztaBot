const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    chapter: Number,
    content: String
})

module.exports = mongoose.model('Posts', PostSchema);