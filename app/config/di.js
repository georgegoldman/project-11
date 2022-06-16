'use strict'

const
    serviceLocator = require('../lib/service_locator'),
    config = require('../config/config')()

serviceLocator.register('logger', () => {
    const logger = require('../lib/logger').create(config.application_logging)
    return logger
})
