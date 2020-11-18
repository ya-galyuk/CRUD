import {User} from "./Model";

import bodyParser from 'body-parser';
import express from 'express';
   var app : any = express();
   app.use(bodyParser.json());
   app.use(express.json());
   app.use(express.urlencoded());


module.exports = app;
import sequelize from "./Connect";

import app2 = require("./Routes");
app = app2;

    app.listen(3131, () => {
         console.log("server started on localhost:3131")
     })

app.get("/",(req,res) =>{
    res.send("hello" )
})
export = app;
