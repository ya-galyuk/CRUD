import {User, IUser} from "./Model";
import express from 'express';
import {rejects} from "assert";
import bodyParser from "body-parser";

let app = express();
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded());
module.exports = app;
import app2 = require("./Routes")

app = app2;

app.listen(3131, () => {
    console.log("server started on localhost:3131")
});

export = app;
