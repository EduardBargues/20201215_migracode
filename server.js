const express = require("express")
const app = express()
const port = 3000
const {
    Pool
} = require("pg")
const secrets = require('secrets.json')
const pool = new Pool({
    user: "eduar",
    host: "localhost",
    database: "20201215_hotels",
    password: secrets.password,
    port: 5432,
})

// FUNCTIONS
const getHotels = (request, response) => {
    pool
        .query("SELECT * FROM hotels")
        .then((result) => response.json(result.rows))
        .catch((e) => console.error(e))
}

// ENDPOINTS
app.get("/hotels", getHotels)

app.listen(port, () => console.log(`Server is listening on port ${port}.`))