const { Router } = require("express")
const userController = require("./Controller/userController")

const router = Router()

const UserController = new userController()

router.post("/criar", UserController.create)

router.put("/atualizar", UserController.update)

module.exports = router
