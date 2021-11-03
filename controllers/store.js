const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Store = require('../models/store.js')

router.get('/', (req,res) => {
  Store.find((err, foundProducts) => {
    res.json(foundProducts)
  })
})

router.post('/', (req,res) => {
  Store.create(req.body, (err, createdProducts) => {
    res.json(createdProducts)
  })
})

router.delete('/:id', (req,res) => {
  Store.findByIdAndRemove(req.params.id, (err,deletedProducts) => {
    res.json(deletedProducts)
  })
})

router.put('/:id', (req,res) => {
  Store.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedProducts) => {
    res.json(updatedProducts)
  })
})

module.exports = router;
