const {development} = require('./config/config.json');
const url = '' + development.dialect + '://' + development.username + ':' + development.password + '@' + development.host + ':' + development.port + '/' + development.database;
const {Sequelize} = require('sequelize');//import
const sequelize = new Sequelize(url);
global.sequelize = sequelize;