const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lista = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

mongoose.model("listas", Lista)