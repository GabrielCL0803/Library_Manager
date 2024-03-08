const {Router} = require("express")
const BooksController = require("../controllers/BooksController")

const bookRoutes = Router()
const bookController = new BooksController()

bookRoutes.post("/books/:user_id", bookController.createBook)
bookRoutes.get("/books", taskController.listTask)
bookRoutes.get("/books/:id", bookController.listBookById)
bookRoutes.patch("/books/:id", bookController.updateBook)
bookRoutes.delete("/books/:id", bookController.deleteBook)

module.exports = bookRoutes