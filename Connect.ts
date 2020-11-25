import {development as development} from "./config/config.json";
let url : string = '' + development.dialect + '://' + development.username + ':' + development.password + '@' + development.host + ':' + development.port + '/' + development.database;
import {Sequelize} from 'sequelize';
const sequelize = new Sequelize(url);
export = sequelize;