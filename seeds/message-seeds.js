const sequelize = require('../config/connection');
const {Messages} = require('../models/');

const messagedata = [
    {
        content: 'I am a message',
        sender_id: 1,
        receiver_id: 2,
        user_id : 1
    },
    {
        content: 'I am a message as well.',
        sender_id: 3,
        receiver_id: 2,
        user_id : 1
    },
    {
        content: 'I too am a message',
        sender_id: 4,
        receiver_id: 1,
        user_id : 1
    }
];

const seedMessages = () => Messages.bulkCreate(messagedata);

module.exports = seedMessages;
