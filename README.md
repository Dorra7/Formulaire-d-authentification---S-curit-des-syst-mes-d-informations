# Module : Sécurité des Systèmes d'Informations

## Rendu N°1 : Interface d'Authentification Persistante

Ce projet implémente une interface de contrôle d'accès simplifiée respectant les contraintes du premier rendu (utilisation de Vanilla JS, sans framework, avec persistance des données).

## 🚀 Guide de test (Procédure d'évaluation)

Pour tester les fonctionnalités de l'application, veuillez suivre ces étapes :

### 1. Authentification par défaut

Au chargement de la page, un compte administrateur est créé automatiquement.

- **Identifiant** : `admin`
- **Mot de passe** : `password`
- Cliquez sur **Valider** pour confirmer la connexion.

### 2. Création d'un nouveau compte

Le bouton **Ajouter Compte** permet de simuler l'enregistrement d'un nouvel utilisateur :

1. Cliquez sur le bouton.
2. Renseignez l'identifiant et le mot de passe dans les invites (prompts).
3. Le système confirme la création du compte.
4. Tentez de vous connecter avec ces nouveaux identifiants.

### 3. Test de persistance (LocalStorage)

Afin de vérifier que les données ne sont pas volatiles :

- Après avoir créé un compte, **rafraîchissez la page (F5)**.
- Connectez-vous avec le compte créé précédemment : l'accès est toujours maintenu grâce au stockage local.

### 4. Réinitialisation

Le bouton **Réinitialiser** permet de vider instantanément les champs du formulaire et de remettre à zéro le panneau de statut.

---

## 🛠️ Détails Techniques

- **Structure** : HTML5 sémantique.
- **Style** : CSS3 (modèle Flexbox pour le centrage et la réactivité).
- **Logique** : JavaScript Vanilla structuré en modules (`storageService`, `uiController`, `authService`).
- **Stockage** : Utilisation de l'API `localStorage` pour simuler une base de données persistante côté client.

---

**Auteur** : Dorra Bahri  
**Formation** : Master 1 Informatique & Big Data - Université Paris 8
