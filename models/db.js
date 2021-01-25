const Sequelize = require("sequelize");

const sequelize = new Sequelize("informajuris", "sergio26i", "#Sergiooasis1994", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conexão realizada com sucesso");
}).catch(function(err){
    console.log("Erro ao relizar a conexão com BD: " + err);
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
