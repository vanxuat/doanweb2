const express=require("express");
const Route =express.Router();
const PassPort=require("passport")
const tailhoan=require("./../models/nguoidung")



Route.get('/',(req,res)=>{
    res.render("quanlyuser/dangnhap")
})

Route.post("/",PassPort.authenticate('local'),(req,res)=>{
   res.redirect("/");
})



module.exports=Route;







