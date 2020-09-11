const router = require('express').Router();

const userRoutes = require('./user-routes');
const taskRoutes = require('./tasks-routes');
const messageRoutes = require('./messages-routes');
const responseRoutes = require('./responses-routes');
const calendarRoutes = require('./calendar-routes');
const attendeesRoutes = require('./attendees-routes');

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);
router.use('/messages', messageRoutes);
router.use('/responses', responseRoutes);
router.use('/calendar', calendarRoutes);
router.use('/attendees', attendeesRoutes);


module.exports = router;