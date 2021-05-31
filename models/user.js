const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const connectionO = require('../config/connection');

class User extends Model {
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        suburb: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        }
    },
    {
        hooks: {
            beforeCreate: async (user) => {
                user.email = await user.email.toLowerCase();
                user.password =  await bcrypt.hash(req.body.password, 10);
                return user;
            },
            beforeUpdate: async (user) => {
                user.email = await user.email.toLowerCase();
                return user;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
