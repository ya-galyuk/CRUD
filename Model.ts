import {DataTypes} from 'sequelize';
import sequelize from "./Connect";
// construction of table in db
const User = sequelize.define('users' , {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},  { timestamps: false

});
export {User};