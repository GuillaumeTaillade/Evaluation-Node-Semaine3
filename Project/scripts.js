// coté client
document.addEventListener('DOMContentLoaded', function () {
  const formulaire = document.querySelector('form');

  formulaire.addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = formulaire.querySelector('#nom').value;
    const categorie = formulaire.querySelector('#categorie').value;
    const materiaux = Array.from(formulaire.querySelector('#materiaux').options)
      .filter(option => option.selected)
      .map(option => option.value);
    const keywords = formulaire.querySelector('#keywords').value.split(',').map(keyword => keyword.trim());

    // Envoie les données au serveur (ajoute les mots-clés à l'objet envoyé)
    fetch('/meubles/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nom,
        categorie,
        materiaux,
        keywords  // Ajoute les mots-clés
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Meuble créé avec succès', data);
        // Réinitialise le formulaire ou effectue d'autres actions nécessaires
      })
      .catch(error => console.error('Erreur lors de la création du meuble', error));
  });
});