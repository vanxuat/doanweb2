const Sequelize=require("sequelize");
const db=require("../config/db")


const cumrap=db.define("cumrap",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    tencum:{
        type:Sequelize.STRING
    },
    diachi:{
        type:Sequelize.STRING(400)
    },
    thanhphoid:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})

module.exports=cumrap

