'use strict'

const
    serviceLocator = require('../lib/service_locator'),
    config = require('./config')()

serviceLocator.register('logger', () => {
    const logger = require('../lib/logger').create(config.application_logging.file)
    return logger
})

serviceLocator.register('mongoose', () => {
    const mongoose = require('mongoose')
    return mongoose
})


module.exports = serviceLocator