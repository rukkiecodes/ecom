const router = require('express').Router()
const Trade = require('../../models/trade')

router.get('/get', async (req, res) => {
    let goods = await Trade.find()

    if (goods.length >= 1)
        return res.status(200).json({
            message: "items found",
            goods,
        })
    else
        return res.status(200).json({
            message: "goods not found",
            goods: [],
        })
})

module.exports = router