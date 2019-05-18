const express = require("express");
const Route = express.Router();
const tailhoan = require("./../models/nguoidung");
const uuid = require("uniqid");

const https = require("https");
const sendmail = require("./../midelwere/giuimail");

Route.get("/", (req, res) => {
  res.render("quanlyuser/dangki");
});

Route.post("/", (req, res) => {
  const { Email, matkhau, hoten, sodienthoai } = req.body;
  // console.log(req);
  tailhoan
    .findOne({ where: { email: Email }, raw: true })
    .then(user => {
      if (user == null) {
        tailhoan
          .create({
            id: uuid(),
            email: Email,
            matkhau: matkhau,
            vaitroid: 1,
            hoten: hoten,
            sodienthoai: sodienthoai
          })
          .then((uer) => {
            let LINK = `<a href="${
              req.headers.origin
            }/dangki/xacthuc/${uer.dataValues.email}">Nhan va Link nay de kich hoat tai khoan</a>`;
            sendmail(
              Email,
              "Sac thuc tai khoan",
              "bo qua",
              LINK,
              (err, info) => {
                if (err) {
                  console.log(err + "");
                }

                console.log(info);
              }
            );

           
            return res.redirect("/");
          })
          .catch(err => {
            return console.log(err + "");
          });
      }
    })
    .catch(err => console.log(err + ""));
  // console.log(req.headers.origin)
});

Route.get("/xacthuc/:email", (req, res) => {
    tailhoan.update({kichhoat: true}, { where: {email:req.params.email}}).then(()=>{
        console.log("update thanh cong")
    }).catch(console.log("khong thanh cong"));

    res.redirect('/');

});

module.exports = Route;
