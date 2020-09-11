const sequelize = require('../config/connection');
const Calendar = require('../models/Calendar');

const calendardata = [
    {
        meeting: "First Meeting",
        owner: 1
    },
    {
        meeting: "Secret Meeting",
        owner: 2    
    }

];

const seedCalendar = () => Calendar.bulkCreate(calendardata);

module.exports = seedCalendar;