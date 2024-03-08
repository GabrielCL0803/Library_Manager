const {Router} = require("express")
const UserController = require("../controllers/UserController")

const userRoutes = Router()
const userController = new UserController()

userRoutes.post("/user", userController.createUser)
userRoutes.get("/user", userController.listUser)
userRoutes.get("/user/:user_id", userController.listUserById)

userRoutes.put("/user/:user_id", userController.updateUser)
userRoutes.delete("/user/:user_id", userController.deleteUser)

module.exports = userRoutes