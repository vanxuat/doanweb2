const Sequelize=require("sequelize");
const db=require("../config/db")


const datcho=db.define("datcho",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    idnguoidung:{
        type:Sequelize.STRING
    },
    idsuatchieu:{
        type:Sequelize.STRING
    },
    thoigiandatve:{
        type:Sequelize.DATE
    },
    tongtien:{
        type:Sequelize.FLOAT
    }

},{
    timestamps:false
});


module.exports=datcho








