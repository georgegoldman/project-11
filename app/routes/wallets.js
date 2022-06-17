'use strict'

const express = require('express')
const router = express.Router()

const
    serviceLocator = require('../config/di')

module.exports = router
    .post("/create", async (req, res) => {
        await serviceLocator.get('walletController').create(req, res)
    })
    .get("/get", async (req, res) => {
        await serviceLocator.get('walletController').getAll(req, res)
    })