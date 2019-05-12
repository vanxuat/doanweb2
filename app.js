const express=require("express");
const db=require("./config/db");
const app=express();
const expressLayouts=require("express-ejs-layouts")
const bodyParser=require("body-parser")




//them vao co so du lieu cac model
const cumrap=require("./models/cumrap");
const datcho=require("./models/datcho")
const loairap=require("./models/loairap")
const motaphim =require("./models/motaphim")
const nguoidung=require("./models/nguoidung")
const phim=require("./models/phim")
const rap=require("./models/rap")
const suatchieu=require("./models/suatchieu")
const vaitro =require("./models/vaitro")
const vephim =require("./models/vephim")



app.use(express.static("public"))
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("views","views")
app.set("view engine","ejs");
app.set('layout', 'index');




app.use("/",require("./routes/index"))
app.use("/dangki",require("./routes/dangki"))


const PORT =process.env.PORT||5000;

db.sync().then(function() {
    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  }).catch(function(err) {
    console.log(err);
    process.exit(1);
  });
