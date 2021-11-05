const bcrypt = require('bcrypt')
const express = require('express')
const profile = express.Router()
const Profile = require('../models/profile.js')

// user.get('/', (req, res) => {
//   res.json('Hello World')
// })

profile.post('/createaccount', (req,res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Profile.create(req.body, (err, createdUser) => {
    if(err){
      console.log(err);
      res.json(err.message)
    } else {
      console.log('user is created', createdUser)
      res.json(createdUser)
    }
  })
})

profile.put('/login', (req,res) => {
  console.log(req.body)
  Profile.findOne({username: req.body.username}, (err,foundUser) =>{
    if(err){
      res.json('Please try again')
    } else {
      if(!foundUser){
        res.json('Username and password do not match')
      } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        res.json({username: foundUser.username})
      } else {
        res.json('Username and password do not match. Please try again')
      }
    }
  })
})

module.exports = profile