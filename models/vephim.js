const Sequelize=require("sequelize");
const db=require("../config/db")

const vephim = db.define("vephim",{
    id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    iddatcho:{
        type:Sequelize.STRING
    },
    maghe:{
        type:Sequelize.STRING
    },
    diachingang:{
        type:Sequelize.STRING
    },
    diachidoc:{
        type:Sequelize.STRING
    },
    giatien:{
        type:Sequelize.FLOAT
    }
},{
    timestamps:false
});



module.exports= vephim











