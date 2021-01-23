// Modules //

const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require('express-validator');
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Mongoose //

require("./models/lista")
const Lista = mongoose.model("listas")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/lista").then(() => {
    console.log("Conectado ao Mongo")
}).catch((err) => {
    console.log("Erro ao se conectar:" +err)
})

// Body-Parser //

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// EJS //

app.set("view engine", "ejs");

// Public //

app.use(express.static(path.join(__dirname + "/public")));

// Routes //

app.get("/", function(req, res){
    res.render("index")
});

app.get("/termos-de-uso", function(req, res){
    res.render("termos-de-uso")
});

app.get("/politica-de-privacidade", function(req, res){
    res.render("politica-de-privacidade")
});

app.post("/", urlencodedParser, function(req, res){
    console.log(req.body);
    res.render("aviso-de-envio")
});

app.post("/", function(req, res){
    const novaLista = {
        name: req.body.name,
        email: req.body.email
    }

    new Lista(novaLista).save().then(() => {
        console.log("Lista Salva com Sucesso!")
    }).catch((err) => {
        console.log("Erro ao salvar lista!")
    })
})

// Servidor //

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


