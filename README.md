# Formulaire de Sondage pour Étude

Ce projet est une application web simple permettant de collecter des données via un formulaire de sondage. Les données collectées sont utilisées pour une étude sur les promotions et les habitudes d'achat.

## Fonctionnalités

- **Formulaire de sondage** : Collecte des informations sur les produits achetés, les promotions utilisées, et les caractéristiques démographiques des participants.
- **Envoi des données** : Les données saisies dans le formulaire sont envoyées à un serveur pour traitement.
- **Mise à jour des fichiers Excel** : Les données collectées sont ajoutées à un fichier Excel stocké dans un bucket AWS S3.

## Structure du formulaire

Le formulaire collecte les informations suivantes :
1. **Produit acheté** : Nom du produit.
2. **Quantité** : Nombre d'unités achetées.
3. **Date d'achat** : Date à laquelle le produit a été acheté.
4. **Prix avant promotion** : Prix initial du produit.
5. **Prix après promotion** : Prix réduit du produit.
6. **Type de promotion** : Type de promotion utilisée (réduction, offre groupée, etc.).
7. **Genre** : Genre du participant (homme ou femme).
8. **Âge** : Âge du participant.
9. **Revenu** : Revenu mensuel du participant.

## Lien vers le formulaire

Vous pouvez accéder au formulaire via le lien suivant :  
[Formulaire de Sondage](https://sondage-front.onrender.com/)
