const express = require('express');
const router = express.Router();
const Meuble = require('../models/meuble');

// Routes pour récupérer un meubles
router.get('/', (req, res) => {
  // Logique de récupération des meubles depuis la base de données
  res.send('Liste des meubles');
});

// Route pour créer un meuble
router.post('/create', async (req, res) => {
  try {
    const { nom, categorie, materiaux, keywords } = req.body;

    const nouveauMeuble = new Meuble({
      nom,
      categorie,
      materiaux,
      keywords 
    });

    const meubleEnregistre = await nouveauMeuble.save();
    res.status(201).json(meubleEnregistre);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la création du meuble');
  }
});


module.exports = router;