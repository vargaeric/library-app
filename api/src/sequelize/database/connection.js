const Sequelize = require('sequelize');

const sequelize = new Sequelize('library_db', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.
    authenticate()
    .then(() => {
        console.log('The connection with the database has been succesfully established!');
    }).catch((err) => {
        console.log('An error occured while trying to connect to database: ', err);
    });

module.exports = sequelize;