import app = require("./app");
import express from "express";
import {User} from "./Model";
import {IUser} from "./Model";
import {Response} from "express";


app.get("/show",async (req : express.Request,
                       res : Response ):Promise<Response<IUser[]>> =>{
    try {let Users = await User.findAll();
        return res.json(Users)}
    catch (e){}
});
app.get("/user/:id",async(req : express.Request,
                          res : Response):Promise<Response<IUser[]>> =>{
    try {let Users = await User.findByPk(req.params.id);
        return res.send(Users);}
    catch (e){}
});
app.post("/create",async(req:express.Request,
                                res:express.Response)=>{
   try{await User.create({name: req.body.name});}
   catch (e){} res.redirect("/show");
});
app.put("/update", async(req:express.Request,
                                      res:express.Response) =>{
    try{await User.update({name: req.body.name},{
        where: {id:req.body.id}});}
    catch (e){}res.redirect("/show");
});
app.delete("/delete/:id",async(req : express.Request,
                                        res:express.Response)=>{
    try{await User.destroy({where:{id:req.params.id}});}
    catch (e){}res.redirect("/show");
});


export = app;
