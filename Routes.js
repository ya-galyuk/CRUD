require('./app');
const {User} = require('./Model');
app.get("/show", function (req, res) {
    User.findAll({raw: true}).then(users => {
        console.log(users);
        res.send(users);
    }).catch(err => console.log(err));
});
app.get('/user/:id', function (req, res) {
    console.log(req.params);
    console.log(req.params.id)
    User.findByPk(req.params.id)
        .then(user => {
            if (!user) return; // если пользователь не найден
            res.send(user);
            console.log(user.name);
        }).catch(err => console.log(err));
});
app.put('/update/:id/:name', function (req, res) {

    User.update({name: req.params.name}, {
        where: {
            id: req.params.id
        }

    }).then((res) => {
        console.log(res);
    });
    res.redirect("/show");
});
app.post('/create/:name',function (req, res) {

    User.create({
        name: req.params.name,
    }).then(res => {
        //res.redirect("/show");
        console.log(res);
    }).catch(err => console.log(err));
    res.redirect("/show");

});
app.delete('/delete/:id', function (req, res) {

    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((res) => {
        console.log(res);
    });
    res.redirect("/show");
});
app.get('/', function (req, res) {
    console.log('conected');//получаем лог при попытке подключения
    res.send('userlist');
});
global.app = app;