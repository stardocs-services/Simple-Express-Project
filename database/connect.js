const { Sequelize} = require('sequelize');

const db = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'express_project',
    port: 3306,
};

const sequelize = new Sequelize(
    'express_project',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql',
        define:{
            freezeTableName: true
        }
    }
);

module.exports = { db , sequelize};
global.sequelize = { db , sequelize};