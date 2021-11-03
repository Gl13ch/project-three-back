const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
    qty: Number,
  }
)

const Store = mongoose.model('Store', storeSchema)
module.exports = Games
