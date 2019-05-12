const express=require("express");
const Route =express.Router();
const  suatchieu=require("./../models/suatchieu")

Route.get("/",(req,res)=>{

// suatchieu.create({idxuatchieu:"12",idphim:"14",idrap:"15",ngaychieu:"1996-5-12",thoigianchieu:"4:20"})
//     .then(()=>console.log("them thanh cong")).catch((err)=>console.log(err));

    

    res.render("trangchu/dsve");
})








module.exports=Route;
