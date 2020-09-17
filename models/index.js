const User = require('./User');
const Tasks = require('./Tasks');
const Messages = require('./Messages');
const Calendar = require('./Calendar');
const Responses = require('./Responses');
const Attendees = require('./Attendees');

//associations go here
User.hasMany(Messages); 
Messages.belongsTo(User, {
    onDelete: 'CASCADE',
    foreignKey: 'sender_id'
});

Messages.belongsTo(User,{
    onDelete: 'CASCADE',
    foreignKey: 'receiver_id'
})

User.hasMany(Tasks);
Tasks.belongsTo(User);

User.hasOne(Calendar);
Calendar.belongsTo(User);

Messages.hasMany(Responses, {
    foreignKey: 'message_id',
    onDelete: 'CASCADE',
    foreignKeyConstraint: false,
    constraints: false
});

Responses.belongsTo(Messages, {
    foreignKey: 'message_id',
    onDelete: 'CASCADE',
    foreignKeyConstraint: false
});

Calendar.hasMany(Attendees, {
    onDelete: 'CASCADE',
    constraints: false,
    foreignKey: 'calendar_id',
    
})
Attendees.belongsTo(Calendar, {
    foreignKey: 'user_id'
});





module.exports = { User, Tasks, Messages, Calendar, Responses, Attendees };