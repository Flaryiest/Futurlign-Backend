const pool = require("./pool.cjs")

async function sendApplication(fullName, school, email, grade) {
    await pool.query("INSERT INTO applications (fullname, school, email, grade) VALUES (($1), ($2), ($3), ($4))", [fullName, school, email, grade])
}

module.exports = {sendApplication}