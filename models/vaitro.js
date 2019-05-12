const Sequelize=require("sequelize");
const db=require("../config/db")


const vaitro=db.define("vaitro",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    tenvaitro:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})


module.export=vaitro





