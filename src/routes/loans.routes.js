const {Router} = require("express")
const LoansController = require("../controllers/LoansController")
const routes = require(".")

const loansRoutes = Router()
const loansController = new LoansController()

loansRoutes.post("/:user_id/:book_id", loansController.borrowBooks)

module.exports = routes