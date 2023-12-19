const express = require('express');
const router = express.Router();
const Meuble = require('../models/meuble');

// Routes pour les meubles
router.get('/', (req, res) => {
  // Logique de récupération des meubles depuis la base de données
  res.send('Liste des meubles');
});


module.exports = router;