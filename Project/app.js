const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; 

// Configuration de Mongoose
mongoose.connect('mongodb://localhost:27017/nom-de-la-base-de-donnees', { useNewUrlParser: true, useUnifiedTopology: true });

// Configuration de Pug et body-parser
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 

// Importation des modèles
const Meuble = require('./models/meuble');
const MatierePremiere = require('./models/matierePremiere');
const Utilisateur = require('./models/utilisateur')

// Importation des routes
const meublesRoute = require('./routes/meubles');

// Utilisation des routes
app.use('/meubles', meublesRoute);

// Middleware / Gestion d'erreur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur s\'est produite !');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});