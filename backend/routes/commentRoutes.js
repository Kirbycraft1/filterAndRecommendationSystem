const express = require("express");
const router = express.Router();
const { getReviewsByBook, getAllReviews } = require("../controllers/commentController");

router.get("/", getAllReviews);
router.get("/listing/:listingId", getReviewsByBook);

module.exports = router;