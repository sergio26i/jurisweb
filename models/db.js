const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "mysql742.umbler.com", 
    port: "41890",
    username: "sergio26i",
    password: "#Sergiooasis1994",
    database: "informajuris",
        define: {
            timestamps: true,
            underscored: true,
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
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
