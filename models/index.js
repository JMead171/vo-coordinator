const User = require('./User');
const Tasks = require('./Tasks');
const Messages = require('./Messages');
const Calendar = require('./Calendar');
const Response = require('./Response');

//associations go here
User.hasMany(Messages, {
    foreignKey: 'sender_id'
}); 

User.hasMany(Messages, {
    foreignKey: 'receiver_id'
});

Messages.belongsTo(User, {
    foreignKey: 'sender_id'
});


module.exports = { User, Tasks, Messages, Calendar, Response };