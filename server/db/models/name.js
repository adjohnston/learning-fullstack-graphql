const mongoose = require('mongoose')

module.exports = mongoose.model(
  'Name',
  new mongoose.Schema({
    name: String,
  })
)
