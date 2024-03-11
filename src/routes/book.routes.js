const {Router} = require("express")
const BooksController = require("../controllers/BooksController")

const bookRoutes = Router()
const bookController = new BooksController()

bookRoutes.post("/book/:user_id", bookController.createBook)
bookRoutes.get("/book", bookController.listBook)
bookRoutes.get("/book/:id", bookController.listBookById)
bookRoutes.patch("/book/:id", bookController.updateBook)
bookRoutes.delete("/book/:id", bookController.deleteBook)

module.exports = bookRoutes