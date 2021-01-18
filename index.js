// Modules //

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

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

// Servidor //

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


