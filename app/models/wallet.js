'use strict'

const
    serviceLocator = require('../config/di'),
    mongoose = serviceLocator.get('mongoose');

const { model, Schema } = mongoose;

module.exports = model("Wallet", Schema({
    type: {
        type: String,
        required: true,
        lowercase: true,
        required: true,
    },
    private: {
        type: String,
        required: false
    },
    keystore: {
        type: String,
        required: false
    },
    phrase: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
}, {
    timestamp: true
}))
