const Sequelize = require("sequelize") // Iniciando a conexão com o Mysql
const sequelize = new Sequelize("nomeemail", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

//torna o sequelize visível globalmente
module.exports = {sequelize, Sequelize}