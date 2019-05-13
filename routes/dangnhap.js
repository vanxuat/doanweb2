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




Route.get(
    '/auth/google',
    PassPort.authenticate('google', {
      scope: ['profile', 'email']
    }),(req,res)=>{
      res.send("dang nhap thanh cong");
    }
);

Route.get('/auth/google/callback', PassPort.authenticate('google', { 
    successRedirect: '/',
    failureRedirect: '/dangki'
}));






module.exports=Route;







