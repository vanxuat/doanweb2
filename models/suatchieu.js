const Sequelize=require("sequelize");
const db=require("../config/db")


const suatchieu=db.define("suatchieu",{
    idxuatchieu:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    idphim:{
        type:Sequelize.STRING
    },
    idrap:{
        type:Sequelize.STRING
    },
    ngaychieu:{
        type:Sequelize.DATE
    },
    thoigianchieu:{
        type:Sequelize.TIME
    },
    giave:{
        type:Sequelize.FLOAT
    }
},{
    timestamps:false
});

module.exports=suatchieu












