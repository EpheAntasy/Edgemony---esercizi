const express = require('express');
let petRouter = express.Router();
const mongoose = require('mongoose');
const Pet = mongoose.model('petModel');

petRouter.get('/pet', (req, res) => {
    console.log("ciaone");
    res.render("petUpdate", {
        viewTitle: "Inserisci un pet"
    });
});

petRouter.post('/pet', (req, res) => {
    if (req.body._id == '')
        insertPet(req, res);
    else
        updatePet(req, res);
});

function insertPet(req, res) {
    let pet = new Pet();
    pet.name = req.body.name;
    pet.species = req.body.species;
    pet.race = req.body.race;
    pet.age = req.body.age;
    pet.save((err, doc) => {
        if (!err)
            res.redirect('/petList');
        else
            console.log(`Errore nell' inserimento: ${err}`);
    })
};


function updatePet(req, res) {
    Pet.updateOne({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('petList'); }
        else {
            console.log('Errore durante l\' update : ' + err);
        }
    });
}

petRouter.get('/petlist', (req, res) => {
    Pet.find((err, docs) => {
        if (!err) {
            res.render("petList", {
                petlist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});


petRouter.get('/pet/:id', (req, res) => {
    console.log("ciao");
    Pet.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.render("petUpdate", {
                viewTitle: "Aggiornamento",
                pet: docs
            });
        }
    });
});

petRouter.get('/pet/delete/:id', (req, res) => {
    Pet.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/petList');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = petRouter;