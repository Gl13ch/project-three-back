const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true}
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile
