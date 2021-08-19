const express = require('express')
const router = express.Router()

//All Items route
router.get('/', (req, res) => {
  res.render('items/index')
})

//New Items route
router.get('/new', (req, res) => {
  res.render('items/new')
})

//Create Item Route
router.post('/', (req, res) => {
  res.send('Create')
})
module.exports = router