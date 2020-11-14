const {User} = require('./Model');
var bodyParser = require('body-parser');
var express = require('express'),
    app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

global.app = app;
require("./Connect");
require('./Routes')
sequelize.sync().then(() => {
    app.listen(3131, function () {
        console.log("Server start on localhost:3131");
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
global.app = app;












