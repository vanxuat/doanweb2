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
    thoidiembatdau:{
        type:Sequelize.DATE
    },
    thoidiemketthuc:{
        type:Sequelize.DATE
    },
    giave:{
        type:Sequelize.FLOAT
    }
},{
    timestamps:false
});

module.exports=suatchieu












