import {development as development} from "./config/config.json";
let url : string = '' + development.dialect + '://' + development.username + ':' + development.password + '@' + development.host + ':' + development.port + '/' + development.database;

import {Client} from "pg";
const client = new Client({
    connectionString : url
});
client.connect();
export = client;