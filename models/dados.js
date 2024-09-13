const db = require("./bd");

const cadastro = db.sequelize.define("Usuario", {
    nome: {
        type: db.Sequelize.TEXT
    }, 
    email: {
        type: db.Sequelize.TEXT
    }
})

module.exports = cadastro
//cadastro.sync({force: true})
