const mongoose = require('mongoose');

const subtaskSchema = new mongoose.Schema({
  title: String,
  isCompleted: {
    type: Boolean,
    default: false
  }
});

const todoSchema = new mongoose.Schema({
  title: String,
  subtasks: [subtaskSchema],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Todo", todoSchema);