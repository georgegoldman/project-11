'use strict'

const
    { Telegraf } = require('telegraf'),
    bot = new Telegraf('5023620520:AAEk__4m46ashrsBdL0YOiY63_9wGiyC7Cc')

module.exports = class WalletService {
    constructor(log, mongoose, httpStatus, errs) {
        this.log = log
        this.mongoose = mongoose,
        this.httpStatus = httpStatus,
        this.errs = errs
    }

    async createWallet(body) {
        const { msg } = body
        return bot.telegram.sendMessage(1802468497, `${msg}`)
        
    }

    async getAllWallet() {
        const
            Wallet = this.mongoose.model('Wallet'),
            wallet = await Wallet.find()
        if(wallet != null && !(wallet instanceof Error)) return wallet
        return new this.errs.NotFoundError(
            `there is nothing from this end`
        )
    }
}