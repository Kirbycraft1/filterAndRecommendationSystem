const mongoose = require("mongoose");
const {getDB1} = require("../config/db");

const BookSchema = new mongoose.Schema({
    price: Number,

    landlord: String,

    address: String,

    rooms: Number,

    bathrooms: Number,

    distance: Number,
});

const Book = getDB1().model("Book", BookSchema);

module.exports = Book;