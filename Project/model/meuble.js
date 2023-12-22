const mongoose = require('mongoose');

const meubleSchema = new mongoose.Schema({
  nom: String,
  categorie: String,
  keywords: [String], // Modification en tableau de string ici pour le système de mots clés
  matierePremiere: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MatierePremiere' }],
  utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' }
});

const Meuble = mongoose.model('Meuble', meubleSchema);

module.exports = Meuble;