# Passages C2 · météo Rennes

Page HTML unique (aucune étape de build) :
- prochains passages de bus à un arrêt STAR, via l'API open data STAR (`data.explore.star.fr`) ;
- prévisions météo des prochaines heures à Rennes, via Open-Meteo.

## Publication avec GitHub Pages

1. Créer un dépôt et y déposer `index.html` à la racine.
2. Dépôt > Settings > Pages > Source : « Deploy from a branch », branche `main`, dossier `/ (root)`.
3. La page est servie en HTTPS à `https://<utilisateur>.github.io/<depot>/`.

## Réglages

Le bloc `CONFIG` (dans le script en bas de `index.html`) fixe l'arrêt, le filtre de destination
et le nombre de passages. Les noms de jeu de données et de champs STAR sont à vérifier.

## Limites connues

- Si l'API STAR n'autorise pas les appels depuis un autre domaine (CORS), l'affichage des passages
  échouera sur github.io : il faudra un relais.
- Le dépôt et la page sont publics si le dépôt est public.
