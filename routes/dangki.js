const express=require("express");
const Route =express.Router();
const tailhoan=require("./../models/nguoidung")

Route.get("/",(req,res)=>{
    res.render("quanlyuser/dangki");
})

Route.post('/',(req,res)=>{
    

})





module.exports=Route;



