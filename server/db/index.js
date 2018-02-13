const mongoose = require('mongoose')
const db = mongoose.connection
let timer

mongoose.connect('mongodb://mongodb/db')

db.on('error', ({ message }) => {
  if (
    message &&
    message.match(/failed to connect to server .* on first connect/)
  ) {
    timer = setTimeout(() => {
      console.log('Retrying connection…')
      mongoose.connect('mongodb://mongodb/db').catch(() => {})
    }, 5000)
  }
})

db.once('connected', () => {
  clearTimeout(timer)
  console.log('MongoDB connected')
})

module.exports = db
