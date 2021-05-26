const messages = require('../public/messages.js')

const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  res.render('new', { title: 'New Message' })
})

router.post('/', function (req, res, next) {
  console.log(req.body)
  const user = req.body.user
  const text = req.body.text
  const added = new Date()
  messages.push({ text, user, added })
  res.render('new', { title: 'New Message' })
  res.redirect('/')
})

module.exports = router
