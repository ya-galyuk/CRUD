import {DataTypes,Model,Optional} from "sequelize";
import sequelize from "./Connect";
import pg from 'pg-types';
import {Pool} from "pg";

interface UserA {
    id:number;
    name:string;
}
interface UserCreationAttributes
    extends Optional<UserA, "id"> {}
export interface IUser
    extends Model<UserA, UserCreationAttributes>,
        UserA{}

let User = sequelize.define<IUser>('users' , {
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