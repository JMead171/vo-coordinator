const seedUsers = require('./user-seeds');
const seedTasks = require('./task-seeds');
const seedResponses = require('./response-seeds')
const seedCalendar = require('./calendar-seeds');
const seedMessages = require('./message-seeds');
const seedAttendees = require('./attendees-seeds');

const sequelize = require('../config/connection');


async function seedAll(){
    await sequelize.sync({force: true});
    console.log('---------------');
    await seedUsers();
    console.log('---------------');
    await seedTasks();
    console.log('---------------');
    await seedMessages();
    console.log('---------------');
    await seedCalendar();
    console.log('---------------');
    await seedResponses();
    console.log('---------------');
    await seedAttendees();

    process.exit(0);
}

seedAll();