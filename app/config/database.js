'use strict'

const
    serviceLocator = require('./di'),
    logger = serviceLocator.get('logger');

class Database{
    constructor(uri) {
        this.mongoose = serviceLocator.get('mongoose')
        this._connect(uri)
    }

    _connect(uri) {
        this.mongoose.Promise = global.Promise
        this.mongoose.connect(uri)
        const { connection } = this.mongoose
        connection.on('connected', ()=> {
            logger.info('Database connection is successful')
        })
        connection.on('error', (err) => {
            logger.info(`Database Connection failed ${err}`)
        })
        connection.on('disconnected', () => {
            logger.info('Database Connection Disconnected')
        })
        process.on('SIGINT', () => {
            connection.close()
            logger.info(
                'Database Connection closed due to Nodejs process terminated'
            )
            process.exit(0)
        })
        // initialize model
        require('../models/wallet')
    }
}

module.exports = Database