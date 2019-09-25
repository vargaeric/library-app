const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    author: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    pageNumber: {
        type: Sequelize.INTEGER(11),
    },
    ageRestriction: {
        type: Sequelize.ENUM,
        values: ['child', 'teen', 'adult'],
    }
});

module.exports = Book;