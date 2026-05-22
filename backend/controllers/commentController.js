const reviewModel = require("../models/Comment")

async function getReviewsByBook(req, res){
    const {bookID} = req.params;
    const reviews = await reviewModel.find({listing:bookID});
    res.json(reviews);
}

async function getAllReviews(req, res){
    const reviews = await reviewModel.find();
    res.json(reviews);
}

module.exports = {getReviewsByBook, getAllReviews};