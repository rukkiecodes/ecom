const router = require("express").Router()

const User = require("../../models/user")
const Trade = require("../../models/trade")

const mongoose = require("mongoose")

const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")

router.post("/addStock", upload.single("image"), async (req, res) => {
    const { email, price, name, description, user, availability, brand, category, condition, shippingCost } = req.body

    let userProfile = await User.findOne({ email })

    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: process.env.CLOUDINARY_FOLDER,
        })

        let newItem = {
            _id: new mongoose.Types.ObjectId(),
            image: result.secure_url,
            price,
            name,
            description,
            user: userProfile._id,
            availability,
            brand,
            category,
            condition,
            shippingCost
        }

        let trade = await Trade.create(newItem)

        return res.status(201).json({
            message: 'Item created successfully',
            trade
        })
    } catch (error) {
        return res.status(401).json({
            message: "Item creation failed",
        })
    }
})

module.exports = router