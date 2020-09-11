const sequelize = require('../config/connection');
const Attendess = require('../models/Attendees');

const attendeesdata = [
    {
        user_id: 2,
        calendar_id: 1
    },
    {
        user_id: 3,
        calendar_id: 1
    },
    {
        user_id: 4,
        calendar_id: 1
    },
    {
        user_id: 3,
        calendar_id: 2
    },
    {
        user_id: 4,
        calendar_id: 2
    }
];

const seedAttendees = () => Attendess.bulkCreate(attendeesdata);

module.exports = seedAttendees;