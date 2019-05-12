const Sequelize=require("sequelize");

const url=process.env.DATABASE_URL|| 'postgres://postgres:123456@localhost:5432/rapchieuphim'


const db = new Sequelize(url);


module.exports= db;