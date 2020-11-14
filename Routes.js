require('./app');
const {User} = require('./Model');
var bodyParser = require('body-parser');
var jsonparser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/show", function (req, res) {
    User.findAll({raw: true}).then(users => {
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
        }).catch(err => console.log(err));
});
app.put('/update', function (req, res) {
    User.update({name: req.body.name}, {
        where: {
            id: req.body.id
        }
    }).then((res) => {
    });
    res.redirect("/show");
});
app.post('/create', function (req, res) {
    User.create({
        name: req.body.name,
    }).then(res => {
    }).catch(err => console.log(err));
    res.redirect("/show");
});
app.delete('/delete/:id', function (req, res) {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then((res) => {
    });
    res.redirect("/show");
});
app.get('/', function (req, res) {
    console.log('conected');//получаем лог при попытке подключения
    res.send('userlist');
});
global.app = app;