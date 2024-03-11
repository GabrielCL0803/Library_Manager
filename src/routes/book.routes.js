const {Router} = require("express")
const BooksController = require("../controllers/BooksController")
const checkUserExists = require("../middlewares/CheckUserExist")
const checkBookExist = require("../middlewares/CheckBookExist")

const bookRoutes = Router()
const bookController = new BooksController()

bookRoutes.post("/books/:user_id",checkUserExists, bookController.createBook)
bookRoutes.get("/books", bookController.listBook)
bookRoutes.get("/books/:id",checkBookExist, bookController.listBookById)
bookRoutes.delete("/books/:id",checkBookExist, bookController.deleteBook)

module.exports = bookRoutes