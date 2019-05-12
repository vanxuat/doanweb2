const Sequelize=require("sequelize");
const db=require("../config/db")

const rap = db.define("rap",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    tenrap:{
        type:Sequelize.STRING
    },
    idcum:{
        type:Sequelize.STRING
    },
    loairapid:{
        type:Sequelize.STRING
    },
    kichthuocngang:{
        type:Sequelize.INTEGER
    },
    kichthuocdoc:{
        type:Sequelize.INTEGER
    }
},{
    timestamps:false
})


module.exports=rap






