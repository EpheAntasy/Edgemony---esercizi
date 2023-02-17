const mongoose = require('mongoose');

var petSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    species: {
        type: String,

    },
    race: {
        type: String,

    },
    age: {
        type: Number
    },
});


mongoose.model('petModel', petSchema);