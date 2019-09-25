const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Person = sequelize.define('person', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER(7),
    },
    books: {
        type: Sequelize.STRING(1000),
        get() {
            return this.getDataValue('books').split(',');
        },
        set(val) {
            this.setDataValue('books', val.join(','));
        }
    }
});

module.exports = Person;