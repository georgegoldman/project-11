require('dotenv').config()

const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    config = require('./app/config/config')(),
    cors = require('cors'),
    port = config.app.port,
    Database = require('./app/config/database'),
    walletRoute = require('./app/routes/wallets')

// initialize db
new Database(config.mongo.URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors())

app.use("/api/v1/wallet", walletRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
