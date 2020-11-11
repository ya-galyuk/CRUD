const {User} = require('./Model');
var express = require('express'),
    app = express();
global.app = app;
require("./Connect");
require('./Routes')
sequelize.sync().then(() => {
    app.listen(3131, function () {
        console.log("Сервер ожидает подключения...");
    });

//func to check connection
    async function check() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
    check();
}).catch(err => console.log(err));














