const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Messages extends Model{

}

Messages.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        sender_id: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        receiver_id: {
            type: DataTypes.INTEGER,
            allowNull: false,

        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'messages'
      }
);

module.exports = Messages;