const express = require("express")
const mainRouter = express.Router()
const mainController = require("../controllers/mainController.cjs")

mainRouter.get("/", mainController.respond)
module.exports = mainRouter