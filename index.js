require('dotenv').config()

const
    express = require('express'),
    app = express(),
    config = require('./app/config/config')(),
    port = config.app.port,
    Database = require('./app/config/database')

// initialize db
new Database(config.mongo.URI)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})