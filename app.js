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

app.listen(3000, function(){
    console.log("O servidor está funcionando através da URL http://localhost:3000");
});
app.set('port', process.env.PORT || 3000);


