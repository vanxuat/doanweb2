const express = require("express");
const Route = express.Router();
const uuid = require("uniqid");
const cumrap = require("./../models/cumrap");
const city = require("./../models/thanhpho");
const loairaps = require("./../models/loairap");
const Phims=require("./../models/phim")
const raps=require("./../models/rap")
const sequelize = require("sequelize");
const Op = sequelize.Op;

Route.get("/thanhpho", (req, res) => {
  res.render("quanlyrap/thanhpho");
});

Route.post("/thanhpho", (req, res) => {
  const { thanhpho } = req.body;
  city
    .findOne({ where: { tenthanhpho: { [Op.like]: `%${thanhpho}` } } })
    .then(tp => {
      if (!tp) {
        city
          .create({ id: uuid(), tenthanhpho: thanhpho })
          .then(() => {
            res.redirect("/");
          })
          .catch(err => {
            console.log(err + "");
            res.redirect("/quanlyrap/thanhpho");
          });
      } else {
        console.log("da ton tai thanh pho roi");
        res.redirect("/quanlyrap/thanhpho");
      }
    });
});

Route.get("/cumrap", (req, res) => {
  city
    .findAll({ raw: true })
    .then(ci => {
      res.render("quanlyrap/cumrap", { data: ci });
    })
    .catch(() => {
      console.log(err + "");
    });
});

Route.post("/cumrap", (req, res) => {
  const { tencum, diachi, thanhpho } = req.body;

  cumrap
    .findOne({ where: { tencum: { [Op.like]: `%${tencum}` } } }, { raw: true })
    .then(cum => {
      if (!cum) {
        cumrap
          .create({
            id: uuid(),
            tencum: tencum,
            diachi: diachi,
            thanhphoid: thanhpho
          })
          .then(() => {
            res.redirect("/");
          });
      } else {
        res.redirect("/quanlyrap/cumrap");
      }
    });
});

Route.get("/loairap", (req, res) => {
  res.render("quanlyrap/loairap");
});

Route.post("/loairap", (req, res) => {
  const { loairap } = req.body;

  loairaps
    .findOne(
      { where: { tenloairap: { [Op.like]: `%${loairap}` } } },
      { raw: true }
    )
    .then(lrap => {
      if (!lrap) {
        loairaps.create({ id: uuid(), tenloairap: loairap }).then(() => {
          console.log("them thanh cong");
        });
      }
      else{
          console.log("da toan tai roi");
      }
    });
});

Route.get("/themphim",(req,res)=>{
    res.render("quanlyrap/themphim")
})



Route.post("/themphim",(req,res)=>{
    const{tenphim,ngaychieu,thoiluong,theloai,daodien,dienvien}=req.body;

    Phims.findOne({where:{tenphim:{[Op.like]:`%${tenphim}`}}})
    .then((ph)=>{
        if(!ph){
            Phims.create({id:uuid(),tenphim:tenphim,ngaychieu:ngaychieu,thoiluong:thoiluong,theloai:theloai,daodien:daodien,dienvien:dienvien})
            .then(()=>{console.log("Them thanh")})
            .catch(err=>console.log(err));
        }
        else{
            console.log("phim da co roi")
        }
    }).catch(err=>console.log(err+''))
})


Route.get('/rap',async (req,res)=>{
    let loair=  await  loairaps.findAll({raw:true});
    let cur =await cumrap.findAll({raw:true})
    res.render("quanlyrap/rap",{data:{loair,cur}});


})


Route.post('/rap',async (req,res)=>{
    const {tenrap,cumrap,loairap,kthuocngang,kthuocdoc}=req.body;
    let tc=await raps.create({id:uuid(),tenrap:tenrap,idcum:cumrap,loairapid:loairap,kichthuocngang:kthuocngang,kichthuocdoc:kthuocdoc});
  
    res.redirect("/");

})







module.exports = Route;
