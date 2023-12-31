const router = require("express").Router()
const User = require("../../models/user")
const checkAuth = require("../../middleware/auth")

router.post("/updateProfile", async (req, res) => {
    const {
        email,
        name,
        phone,
        gender,
        state,
        lga,
        specialty,
        description,
        wallet
    } = req.body

    try {
        let user = await User.updateOne({ email }, {
            $set: {
                name,
                phone,
                gender,
                state,
                lga,
                specialty,
                description,
                wallet
            }
        })
        return res.status(200).json({
            message: "User found",
            success: true,
            user
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Auth failed",
            error,
        })
    }
})

module.exports = router