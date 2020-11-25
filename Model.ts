import {DataTypes,Model,Optional} from "sequelize";
import sequelize from "./Connect";
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

async function getUser(id:string):Promise<IUser>{//получаем пользователя
    return await User.findByPk(id);}

async function getUsers():Promise<IUser[]>{//получаем всех пользователей
    return new Promise<IUser[]>((resolve)=>{
        resolve( User.findAll())});}

 async function createUser(name1:string){
      User.create({name: name1}).then(res => {
      }).catch(err => console.log(err));}

 async function updateUser(id:string,name:string){
    await User.update({name: name},{
        where: {id:id}});}

 async function deleteUser(id:string){
   await User.destroy({where:{id:id}});}

export {getUsers,getUser,createUser,updateUser,deleteUser,User};