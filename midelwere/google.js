const GoogleStrategy=require("passport-google-oauth20").Strategy;
const keys =require("./../key")
const nguoidung=require("./../models/nguoidung")
const uuid=require("uniqid")
module.exports= (new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/dangnhap/auth/google/callback'
      },
      ( accessToken, refreshToken, profile, done) => {
        if(profile.id){
          nguoidung.findOne({where:{googleid:profile.id}}).then(us=>{
            if(us){
              return done(null,us);
            }
            else{
              nguoidung.create({id:uuid(),googleid:profile.id,email:profile.emails[0].value,hoten:profile.displayName,hinhanh:profile.photos[0].value,vaitroid:1})
              .then((use)=>{
               
                  const {googleid,email,hoten}=use.dataValues
                    const newuser={googleid,email,hoten}
                    //console.log(newuser);
  
                    return done(null,newuser);
              })
              .catch(err=>console.log(err+''));
  
              
            }
          })
         
  
        }

      }
    )
  );
  
  

