import app = require("./app");
import {User} from "./Model";
app.get("/show", (req, res)=> {
    User.findAll({raw: true}).then(users => {
        res.send(users);
    }).catch(err => console.log(err));
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id)
    User.findByPk(req.params.id)
        .then(user => {
            if (!user) return; // если пользователь не найден
            res.send(user);
        }).catch(err => console.log(err));
});
app.put('/update', (req, res) => {
    User.update({name: req.body.name}, {
        where: {
            id: req.body.id
        }
    }).then((res) => {
    });
    res.redirect("/show");
});
app.post('/create', (req, res)=> {
    User.create({
        name: req.body.name,
    }).then(res => {
    }).catch(err => console.log(err));
    res.redirect("/show");
});
app.delete('/delete/:id',  (req, res)=> {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((res) => {
    });
    res.redirect("/show");
});
app.get('/', (req, res) => {
    console.log('conected');//получаем лог при попытке подключения
    res.send('userlist');
});

export = app ;