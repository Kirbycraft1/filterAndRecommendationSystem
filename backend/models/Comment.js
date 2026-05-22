const mongoose = require("mongoose");
const {getDB2} = require("../config/db");

const CommentSchema = new mongoose.Schema({
    listing: String,

    rating: Number,
    
    comment: String,
});

module.exports = getDB2().model("Comment", CommentSchema);