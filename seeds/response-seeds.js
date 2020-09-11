const sequelize = require('../config/connection');
const Responses = require('../models/Responses');

const responsesdata = [
    {
        content: "We're no strangers to love, You know the rules and so do I",
        sender_id: 1,
        receiver_id: 2,
        message_id: 1
    },
    {
        content: "A full commitment's what I'm thinking of You wouldn't get this from any other guy",
        sender_id: 3,
        receiver_id: 2,
        message_id: 2
    },
    {
        content: "I just want to tell you how I'm feeling Gotta make you understand",
        sender_id: 4,
        receiver_id: 1,
        message_id: 3
    }
];

const seedResponses = () => Responses.bulkCreate(responsesdata);

module.exports = seedResponses;