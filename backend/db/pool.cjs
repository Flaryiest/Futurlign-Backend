require("dotenv").config();
const { Pool } = require("pg");
const connectionString = "postgresql://postgres:bqIqvEsVbQfUDSBnSovoiwswOCtYhUrk@postgres.railway.internal:5432/railway"
module.exports = new Pool({
    connectionString,
});