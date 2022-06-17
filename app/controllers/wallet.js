'use controller'

module.exports = class WalletController {
    constructor(log, walletService, httpStatus) {
        this.log = log
        this.walletService = walletService
        this.httpStatus = httpStatus
    }

    async create(req ,res) {
        try {
            const {body} = req
            const result = await this.walletService.createWallet(body)
            this.log.info('Wallet Created Successfully')
            res.send(result)
        } catch (error) {
            this.log.info(error)
            res.send(Error)
        }
    }

    async getAll(req, res) {
        try {
            const result = await this.walletService.getAllWallet()
            this.log.info(`wallet all fetched successfully`)
            res.send(result)
        } catch (error) {
            this.log.info(error)
            res.send(error)
        }
    }
}