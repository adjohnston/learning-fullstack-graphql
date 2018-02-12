const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/db')
db.once('open', () => console.log('MongoDB is connected'))

module.exports = db
