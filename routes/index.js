const express=require("express");
const Route =express.Router();


Route.get("/",(req,res)=>{
    res.send("tran van xuat");
})






module.exports=Route;
