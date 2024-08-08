const db = require("../db/queries.cjs")
async function respond(req, res) {
    return res.send("connected")
}
module.exports = {respond}