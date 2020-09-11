const sequelize = require('../config/connection');
const Tasks = require('../models/Tasks');

const taskdata = [
    {
        content: 'Implement Calendar',
        user_id: 2
    },
    {
        content: 'Get me coffee',
        user_id: 4
    },
    {
        content: 'Call Jeff',
        user_id: 3
    },
    {
        content: 'Code more',
        user_id: 5
    },
    {
        content: 'Do something',
        user_id: 3
    },
    {
        content: 'More work',
        user_id: 2
    },
    {
        content: 'Lunch',
        user_id: 4
    },
    {
        content: 'Update Everything',
        user_id: 2
    },
];

const seedTasks = () => Tasks.bulkCreate(taskdata);

module.exports = seedTasks;
