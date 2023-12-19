const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  username: String,
  password: String // Il est recommandé d'utiliser des techniques de hachage pour sécuriser les mots de passe.
});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur;