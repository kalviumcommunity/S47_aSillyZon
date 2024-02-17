const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
    name: String,
    email: String,
    comments : String,
})

const Feed = mongoose.model('feedback', feedSchema);
module.exports = Feed