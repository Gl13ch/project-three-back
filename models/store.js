const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    price: Number,
    qty: Number,
    sellername: String
  }
)

const Store = mongoose.model('Store', storeSchema)
module.exports = Store
