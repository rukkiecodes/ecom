const mongoose = require('mongoose')


const tradeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: { type: String },
    price: { type: String },
    name: { type: String },
    description: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    availability: { type: String },
    brand: { type: String },
    category: { type: String },
    condition: { type: String },
    shippingCost: { type: String },
}, { timestamps: true })

module.exports = mongoose.model("Trade", tradeSchema)