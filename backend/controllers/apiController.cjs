const db = require("../db/queries.cjs")

async function signUp(req, res) {
    const {fullName, school, email, grade} = req.body
    await db.sendApplication(fullName, school, email, grade)
    res.sendStatus(200)
}

module.exports = {signUp}