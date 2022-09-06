const mongoose = require('mongoose')

// POST model - update with controllers/todos.js:23
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false
  },
  archive: {
    type: Boolean,
    required: false,
  },
  tag: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
