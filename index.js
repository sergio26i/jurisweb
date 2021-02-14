// Modules //

const express = require("express");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const Contact = require("./models/Contact")
const { check, validationResult } = require("express-validator");
const https = require("https");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

// Middleware //

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});

// Body-Parser //

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// EJS //

app.set("view engine", "ejs");

// Public //

app.use(express.static(path.join(__dirname + "/public")));

// Routes //

app.get("/", (req, res, next) => {
    res.render("index")
});

app.get("/termos-de-uso", (req, res, next) => {
    res.render("termos-de-uso")
});

app.get("/politica-de-privacidade", (req, res, next) => {
    res.render("politica-de-privacidade")
});

app.post("/", (req, res, next) => {
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
    console.log('Umbler listening at https://localhost:', port);
});


