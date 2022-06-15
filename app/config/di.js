'use strict'

const
    serviceLocator = require('../lib/service_locator'),
    config = require('../config/config')()

serviceLocator.register('logger', () => {
    const logger = require()
})
