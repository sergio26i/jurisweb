// Modules //

const express = require("express");
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Body-Parsern //

const urlencodedParser = bodyParser.urlencoded({ extended: false});

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

app.post("/aviso-de-envio", urlencodedParser, function(req, res){
    res.json(req.body)
});


// Servidor //

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


