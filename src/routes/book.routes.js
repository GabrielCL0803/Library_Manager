const {Router} = require("express")
const BooksController = require("../controllers/BooksController")
const checkBookExist = require("../middlewares/CheckBookExist")

const bookRoutes = Router()
const bookController = new BooksController()

bookRoutes.post("/books/:id", bookController.createBook)
bookRoutes.get("/books", bookController.listBook)
bookRoutes.get("/books/:id",checkBookExist, bookController.listBookById)
bookRoutes.delete("/books/:id",checkBookExist, bookController.deleteBook)

module.exports = bookRoutes