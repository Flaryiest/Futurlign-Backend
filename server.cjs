require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const apiRouter = require("./backend/routes/apiRouter.cjs")
const mainRouter = require("./backend/routes/mainRouter.cjs")
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    console.log("test")
    return res.send("Recieved Request")
})
app.use("/api", apiRouter)
app.use("/", mainRouter)

app.listen(port, () => {
    console.log("Listening on port: " + String(port))
})
