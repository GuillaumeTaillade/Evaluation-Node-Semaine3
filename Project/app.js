// coté serveur
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// j'ajoute les routes
const meublesRoutes = require('./routes/meubles'); // Assure-toi d'ajuster le chemin selon ta structure
const viewsRoutes = require('./routes/views'); // Assure-toi d'ajuster le chemin selon ta structure

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

/* Utilisation des routes */
app.use('/meubles', meublesRoute);

// Route pour la page de statistiques
app.get('/statistics', async (req, res) => {
  try {
    // Je récupère le nombre de meuble par catégorie
    const furnitureStats = await Meuble.aggregate([
      {
        $group: {
          _id: "$categorie",
          count: { $sum: 1 }
        }
      }
    ]);

    // Je transforme les données
    const labels = furnitureStats.map(stat => stat._id);
    const data = furnitureStats.map(stat => stat.count);

    // Afficher la page de données
    res.render('statistics', { labels, data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des statistiques');
  }
});

// Middleware / Gestion d'erreur
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Une erreur s\'est produite !');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});