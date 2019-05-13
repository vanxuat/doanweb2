
const LocalStrategy=require("passport-local").Strategy;
const nguoidung=require("./../models/nguoidung")

module.exports=new LocalStrategy({
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
  )