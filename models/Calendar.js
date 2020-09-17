const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Calendar extends Model{

}

Calendar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        meeting: { //descritpion/title
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: { //person hosting meeting
            type: DataTypes.INTEGER,
            references: 
            {
                model: 'user',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('NOW')
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'calendar'
      }
);

module.exports = Calendar;