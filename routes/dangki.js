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
    console.log(req);
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
                    .then(() => {
                        return res.redirect("/");
                    })
                    .catch(err => {
                        return console.log(err + "");
                    });
            }
        })
        .catch(err => console.log(err + ""));
});


module.exports = Route;
