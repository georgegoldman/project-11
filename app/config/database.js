'use strict'

const
    serviceLocator = require(),
    logger = serviceLocator.get('logger')

class Database{
    constructor(uri) {
        this.mongoose = serviceLocator
        this._connect(uri)
    }
}