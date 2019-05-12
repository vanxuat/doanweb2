const Sequelize=require("sequelize");
const db=require("../config/db")

const phim=db.define("phim",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    tenphim:{
        type:Sequelize.STRING
    },
    ngaychieu:{
        type:Sequelize.DATE
    },
    thoiluong:{
        type:Sequelize.INTEGER
    },
    theloai:{
        type:Sequelize.STRING
    },
    daodien:{
        type:Sequelize.STRING(300)
    },
    dienvien:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
})









