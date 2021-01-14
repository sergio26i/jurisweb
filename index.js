// Modules //

const express = require("express");
const app = express();
const path = require("path");

// Public //

app.use(express.static(path.join(__dirname + "/public")));

// Routes //

app.get("/", function(req, res){
    res.sendFile(__dirname + "/content/index.html")
});

app.get("/termos-de-uso", function(req, res){
    res.sendFile(__dirname + "/content/termos-de-uso.html")
});

// Servidor //

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


