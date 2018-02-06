const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userame: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
  }
});

