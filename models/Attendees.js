const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Attendees extends Model {

}

Attendees.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: { //this is the person attending
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        calendar_id: { //this is the meeting they are going to
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'calendar',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'attendees'
    }
);

module.exports = Attendees;