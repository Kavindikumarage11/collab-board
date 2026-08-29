const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');

// Route to get all tasks and create a task
router.route('/').get(getTasks).post(createTask);

// Optional: You can assign members in your group to handle specific routes here later (like update or delete)

module.exports = router;