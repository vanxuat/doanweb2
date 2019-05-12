const Sequelize=require("sequelize");
const db=require("../config/db")


const loairap=db.define("loairap",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    tenloairap:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})

module.exports=loairap;







