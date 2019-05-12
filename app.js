const express=require("express");
const db=require("./config/db");
const app=express();




app.use("/",require("./routes/index"))



const PORT =process.env.PORT||5000;

db.sync().then(function() {
    app.listen(PORT);
    console.log(`Server is listening on port ${PORT}`);
  }).catch(function(err) {
    console.log(err);
    process.exit(1);
  });
