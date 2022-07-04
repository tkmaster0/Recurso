const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let House = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  },
  rooms: {
    type: String
  },
  occupied: {
    type: Boolean
  }
}, {
  collection: 'houses'
})
module.exports = mongoose.model('House', House)