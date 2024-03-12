const {Router} = require("express")
const LoansController = require("../controllers/LoansController")

const loanRoutes = Router()
const loanController = new LoansController()

loanRoutes.post("/:user_id/:book_id", loanController.borrowBooks)

module.exports = loanRoutes