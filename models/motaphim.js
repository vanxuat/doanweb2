const Sequelize=require("sequelize");
const db=require("../config/db")


const motaphim=db.define("motaphim",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    anhminhhoa:{
        type:Sequelize.STRING
    },
    phimid:{
        type:Sequelize.STRING(300)
    }
},{
    timestamps:false
})






