const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  avatar: { type: String },
  rating: { type: Number },
  name: { type: String, required: true },
  referal: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  gender: { type: String },
  state: { type: String },
  wallet: { type: String },
  lga: { type: String },
  specialty: { type: String },
  password: { type: String, required: true },
  description: { type: String },
  investment: { type: Number },
  earnings: { type: Number },
  verified: Boolean,
  copies: { type: Array }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
