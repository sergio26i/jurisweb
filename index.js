// Modules //

const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Contact = require("./models/Contact")
const { check, validationResult } = require("express-validator");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Body-Parser //

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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

app.post("/", function(req, res){
    Contact.create({
        name: req.body.name,
        email: req.body.email
    }).then(function(){
        res.render("aviso-de-envio")
    }).catch(function(erro){
        res.render("index")
    })
});

// Servidor //

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


