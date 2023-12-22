const mongoose = require('mongoose');

const matierePremiereSchema = new mongoose.Schema({
  nom: String,
  entrepriseFournisseur: String
});

const MatierePremiere = mongoose.model('MatierePremiere', matierePremiereSchema);

module.exports = MatierePremiere;