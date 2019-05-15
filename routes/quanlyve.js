const express = require("express");
const Route = express.Router();
const uuid = require("uniqid");


const sequelize = require("sequelize");
const Op = sequelize.Op;

Route.get("/",(req,res)=>{
    if(req.isAuthenticated()){
        console.log("co the su dung chuc nang nay");
    }
    console.log("ban khong the su dung chuc nang nay")
})






module.exports=Route;