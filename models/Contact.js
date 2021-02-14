const db = require("./db");

const Contact = db.sequelize.define('contatos', {
    name: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING
    }
});

//Contact.sync({force: true});//

module.exports = Contact;

