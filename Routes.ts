import app = require("./app");
import express from "express";
import {Response} from "express";
import {UserA} from './Model';
import client from './Connect'
app.get("/show",async (req : express.Request,
                       res : Response ):Promise<Response<UserA>> =>{
    try {const Users = await client.query(`SELECT * FROM users`);
            return res.json(Users.rows);
        }
    catch (e){}
});

app.get("/user/:id",async(req : express.Request,
                          res : Response):Promise<Response<UserA>> =>{
    const query = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [req.params.id],
    }

        const Users = await client.query(query);
        return res.json(Users.rows);

});


app.post("/create",async(req:express.Request,
                                res:express.Response)=>{
   try{ await client.query(`
    INSERT INTO users(name) VALUES($1) RETURNING *` , [req.body.name]);}
   catch (e){} res.redirect("/show");
});

app.put("/update", async(req:express.Request,
                                      res:express.Response) =>{
    try{var value = [req.body.name,req.body.id]
        await  client.query(`
           UPDATE users SET name = $1 WHERE id = $2`
            ,value);}
    catch (e){}res.redirect("/show");
});
app.delete("/delete/:id",async(req : express.Request,
                                        res:express.Response)=>{
    try{
        await client.query(`
        DELETE FROM users
        WHERE id = $1;
    `,[req.params.id]);}
    catch (e){}res.redirect("/show");
});


export = app;
