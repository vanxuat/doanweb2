const Sequelize=require("sequelize");
const db=require("../config/db")


const taikhoan=db.define("taikhoan",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    email:{
        type:Sequelize.STRING
    },
    matkhau:{
        type:Sequelize.STRING(300)
    },
    hoten:{
        type:Sequelize.STRING
    },
    sodienthoai:{
        type:Sequelize.STRING(13)
    },
    vaitroid:{
        type:Sequelize.INTEGER
    },
    hinhanh:{
        type:Sequelize.STRING(300)
    },
    googleid:{
        type:Sequelize.STRING
    },
    facebookid:{
        type:Sequelize.STRING
    }


},{
    timestamps:false
});






module.exports=taikhoan






