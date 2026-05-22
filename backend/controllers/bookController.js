const Book = require("../models/Book")

async function getBooks(req, res){
    const books = await Book.find();
    res.json(books);
}

async function createBook(req,res){
    const newBook = await Book.create(req.body);
    res.json(newBook);
}

async function updateBook(req, res){
    const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(updatedBook);
}

async function deleteBook(req, res){
    await Book.findByIdAndDelete(req.params.id);
    res.json({message:"Book deleted"});
}

async function getBookByID(req, res){
    const {id} = req.params;
    try{
        const book = await Book.findOne({id:id});
        if(!book){
            return res.status(404).json("Book Not Found");
        }
        res.status(200).json(book);
    } catch (error){
        res.status(500).json("server error");
    }
}

module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook,
    getBookByID
};