const express = require("express");

const router = express.Router();

const{
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    getBookByID
} = require("../controllers/bookController");

router.get("/", getBooks);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/:id", getBookByID);

module.exports = router;