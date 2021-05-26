const messages = require('../public/messages.js')
const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages })
})

module.exports = router
