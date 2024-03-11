const {Router} = require("express")
const userRoutes = require("./user.routes")
const bookRoutes = require("./book.routes")

const routes = Router()

routes.use("/", userRoutes)
routes.use("/", bookRoutes)

module.exports = routes