const mongoose = require('mongoose');

// Task Schema define kar rahe hain
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // CreatedAt aur UpdatedAt automatically add ho jayenge
  }
);

// Model export kar rahe hain
module.exports = mongoose.model('Task', taskSchema);