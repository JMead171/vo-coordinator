const sequelize = require('../config/connection');
const User = require('../models/User');

const userdata = [
    {
        first_name: 'Jeff',
        last_name: 'Mead',
        phone: '386-555-5649',
        email: 'jeffmead@gmail.com',
        title: 'The Man',
        username: 'jeffmead',
        password: 'testing1234',
        isManager: 'true'
    },
    {
        first_name: 'Bryan',
        last_name: 'Rivera',
        phone: '386-555-5231',
        email: 'bryanrivera@gmail.com',
        title: 'Senior Designer',
        username: 'brivera',
        password: 'testing1234',
    },
    {
        first_name: 'Kemar',
        last_name: 'Gray',
        phone: '386-555-9831',
        email: 'kemargray@gmail.com',
        title: 'Senior Engineer',
        username: 'kemargray',
        password: 'testing1234',
    },
    {
        first_name: 'Joe',
        last_name: 'Klein',
        phone: '386-555-2320',
        email: 'joeklein@gmail.com',
        title: 'Web Developer',
        username: 'jklein',
        password: 'testing1234',
    },
    {
        first_name: 'Alex',
        last_name: 'Costan',
        phone: '386-555-2210',
        email: 'alexcostan@gmail.com',
        title: 'Best TA',
        username: 'acostan',
        password: 'testing1234',
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;