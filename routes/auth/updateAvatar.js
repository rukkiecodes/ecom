const router = require("express").Router()
const cloudinary = require("../../middleware/cloud")
const upload = require("../../middleware/multer")

const User = require("../../models/user")

router.post("/avatar", upload.single("avatar"), async (req, res) => {
  const { email } = req.body

  let userProfile = await User.findOne({ email })

  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: process.env.CLOUDINARY_FOLDER,
    })

    let user
    user = await User.updateOne({ email }, {
      $set: {
        avatar: result.secure_url,
        name: userProfile.name,
        phone: userProfile.phone
      }
    })

    res.status(200).json({
      message: "Avatar updated",
      success: true,
      user,
      result,
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router