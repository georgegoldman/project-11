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

serviceLocator.register('httpStatus', () => {
    return require('http-status')
})

serviceLocator.register('shortid', () => {
    return require('shortid')
})

serviceLocator.register('errs', () => {
    return require('restify-errors')
})


serviceLocator.register('walletService', (serviceLocator) => {
    const log = serviceLocator.get('logger')
    const mongoose = serviceLocator.get('mongoose')
    const httpStatus = serviceLocator.get('httpStatus')
    const errs = serviceLocator.get('errs')
    const WalletService = require('../service/wallet')

    return new WalletService(log, mongoose, httpStatus, errs)
})

serviceLocator.register('walletController', (serviceLocator) => {
    const log = serviceLocator.get('logger')
    const walletService = serviceLocator.get('walletService')
    const httpStatus = serviceLocator.get('httpStatus')
    const WalletController = require('../controllers/wallet')

    return new WalletController(log, walletService, httpStatus)
})

module.exports = serviceLocator