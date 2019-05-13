const express=require("express");
const db=require("./config/db");
const app=express();
const expressLayouts=require("express-ejs-layouts")
const bodyParser=require("body-parser")
const Passport=require("passport")
const LocalStrategy=require("passport-local").Strategy;
const session =require("express-session");



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
app.use(session({
  secret:'myscret',
  cookie:{
    maxAge:1000*60*5
  }
}))
app.use(Passport.initialize());
app.use(Passport.session());


app.set("views","views")
app.set("view engine","ejs");
app.set('layout', 'index');



app.use((req,res,next)=>{
  console.log("----------------------------------------------------------------");
   const {user}=req;
   res.locals.email=null
   if(!user){
     next();
   }
   else{
      res.locals.email=user.email;
      next();
   }
  
 
})



app.use("/",require("./routes/index"))
app.use("/dangki",require("./routes/dangki"))
app.use('/dangnhap',require("./routes/dangnhap"))







Passport.use(new LocalStrategy({
  usernameField: 'Email',
  passwordField: 'matkhau'
},
  (Email, matkhau, done) => {
   
    nguoidung.findOne({where:{email:Email},row:true}).then(users => {
        if(users.matkhau ===matkhau){
          return done(null,users)
        }
        else{
          return done(false,null);
        }
    }).catch(err=>{console.log(err)});

  
    
  }
));




Passport.serializeUser((user, done) => {
 
  done(null, user.email)

});

Passport.deserializeUser((Email, done) => {
 
  nguoidung.findOne({where:{email:Email},raw:true}).then(users => {
   
      if(users){
        done(null,users);
      }
      else{
        done(false,null)
      }
  });
});















const PORT =process.env.PORT||5000;

db.sync().then(function() {
    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  }).catch(function(err) {
    console.log(err);
    process.exit(1);
  });
