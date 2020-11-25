import app = require("./app");
import express from "express";
import {getUsers,getUser,createUser,updateUser,deleteUser} from "./Model";

app.get("/show",async (req : express.Request,res : express.Response) =>{
    try {res.send(await getUsers());}
    catch (e){}
});
app.get("/user/:id",async(req : express.Request,
                          res : express.Response) =>{
    try {res.send(await getUser(req.params.id));}
    catch (e){}
});
app.post("/create",async(req:express.Request,
                                res:express.Response)=>{
   try{ await createUser(req.body.name);}
   catch (e){} res.redirect("/show");
});
app.put("/update", async(req:express.Request,
                                      res:express.Response) =>{
    try{await updateUser(req.body.id,req.body.name)}
    catch (e){}res.redirect("/show");
});
app.delete("/delete",async(req : express.Request,
                                        res:express.Response)=>{
    try{await deleteUser(req.body.id)}
    catch (e){}res.redirect("/show");
});


export = app;
