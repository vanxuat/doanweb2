const Sequelize=require("sequelize");
const db=require("../config/db")


const thanhpho=db.define("thanhpho",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    tenthanhpho:{
        type:Sequelize.STRING
    }
});


module.exports=thanhpho
