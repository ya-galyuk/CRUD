import app = require("./app");
import {User} from "./Model";
import express from "express";
import sequelize from "./Connect";

app.get("/show", async (req : express.Request,res : express.Response)=> {
    try {
        res.json( await User.scope()
            .findAll());
     }
    catch(e){
        console.log(e)
    }
});

app.get('/user/:id',async (req : express.Request,res : express.Response) => {
    try {
        const user = await User.scope()
            .findByPk(req.params['id']);
            res.json(user);
    } catch (e){
        console.log(e);
    }
});
app.put('/update', (req : express.Request,res : express.Response) => {
    User.update({name: req.body.name}, {
        where: {
            id: req.body.id
        }
    }).then(() => {
    });
    res.redirect("/show");
});
app.post('/create', (req : express.Request,res : express.Response)=> {
    User.create({
        name: req.body.name,
    }).then(() => {
    }).catch();
    res.redirect("/show");
});
app.delete('/delete/:id',  (req : express.Request,res : express.Response)=> {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
    });
    res.redirect("/show");
});
app.get('/', (req : express.Request,res : express.Response) => {
    console.log('conected');//получаем лог при попытке подключения
    res.send('userlist');
});

export = app ;
