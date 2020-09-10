const User = require('./User');
const Tasks = require('./Tasks');
const Messages = require('./Messages');
const Calendar = require('./Calendar');
const Responses = require('./Responses');

//associations go here
User.hasMany(Messages); 
Messages.belongsTo(User, {
    onDelete: 'CASCADE',
    
});

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


module.exports = { User, Tasks, Messages, Calendar, Responses };