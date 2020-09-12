const sequelize = require('../config/connection');
const User = require('../models/User');
//All passwords are testing1234 the hash is put there so it works.

const userdata = [
    {
        first_name: 'Jeff',
        last_name: 'Mead',
        phone: '386-555-5649',
        email: 'jeffmead@gmail.com',
        title: 'The Man',
        username: 'jeffmead',
        password: '$2b$10$w9aV/Zg2BOWH90y6DrWl2OCHbGRJfYRDBCpxIbLgtoYxXjczx8Odu',
        isManager: 'true'
    },
    {
        first_name: 'Bryan',
        last_name: 'Rivera',
        phone: '386-555-5231',
        email: 'bryanrivera@gmail.com',
        title: 'Senior Designer',
        username: 'brivera',
        password: '$2b$10$w9aV/Zg2BOWH90y6DrWl2OCHbGRJfYRDBCpxIbLgtoYxXjczx8Odu',
    },
    {
        first_name: 'Kemar',
        last_name: 'Gray',
        phone: '386-555-9831',
        email: 'kemargray@gmail.com',
        title: 'Senior Engineer',
        username: 'kemargray',
        password: '$2b$10$w9aV/Zg2BOWH90y6DrWl2OCHbGRJfYRDBCpxIbLgtoYxXjczx8Odu',
    },
    {
        first_name: 'Joe',
        last_name: 'Klein',
        phone: '386-555-2320',
        email: 'joeklein@gmail.com',
        title: 'Web Developer',
        username: 'jklein',
        password: '$2b$10$w9aV/Zg2BOWH90y6DrWl2OCHbGRJfYRDBCpxIbLgtoYxXjczx8Odu',
    },
    {
        first_name: 'Alex',
        last_name: 'Costan',
        phone: '386-555-2210',
        email: 'alexcostan@gmail.com',
        title: 'Best TA',
        username: 'acostan',
        password: '$2b$10$w9aV/Zg2BOWH90y6DrWl2OCHbGRJfYRDBCpxIbLgtoYxXjczx8Odu',
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;