const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Task = require('../models/Task');

// 1. POST /tasks - Naya task create karna
router.post('/', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    // 400: Agar title missing ho
    if (!title || title.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Title is required',
      });
    }

    const newTask = new Task({
      title,
      description,
      status,
    });

    const savedTask = await newTask.save();
    return res.status(201).json({
      success: true,
      data: savedTask,
    });
  } catch (error) {
    // 500: Server error
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// 2. GET /tasks - Saare tasks get karna
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// 3. GET /tasks/:id - Aik specific task get karna by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 400: Check karein agar MongoDB ID format invalid hai
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID format',
      });
    }

    const task = await Task.findById(id);

    // 404: Agar task nahi mila
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// 4. PUT /tasks/:id - Task update karna by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, status } = req.body;

    // 400: Invalid ID check
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID format',
      });
    }

    // 400: Check agar status invalid value ho
    if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Status must be pending, in-progress, or completed',
      });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true, runValidators: true }
    );

    // 404: Agar task na mile
    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// 5. DELETE /tasks/:id - Task delete karna by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // 400: Invalid ID check
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID format',
      });
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    // 404: Agar task na mile
    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: deletedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;