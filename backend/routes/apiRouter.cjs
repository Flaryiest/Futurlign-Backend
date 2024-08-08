const express = require("express")
const apiRouter = express.Router()
const apiController = require("../controllers/apiController.cjs")
apiRouter.post("/signUp", apiController.signUp)

module.exports = apiRouter