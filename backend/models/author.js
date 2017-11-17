const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  authorUrl: {
    type: String,
    required: true
  },
  authorName: [{
    lang: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: true
    }
    }]


})

var Author = mongoose.model("author",authorSchema);

module.exports = Author;