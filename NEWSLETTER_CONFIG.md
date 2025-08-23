# 📧 Configuration Newsletter RGPD avec Formspree

## 🔒 Variables d'environnement requises

Pour activer la newsletter, vous devez configurer la variable suivante dans votre fichier `.env.local` :

```bash
# Configuration Formspree (gratuit jusqu'à 50 soumissions/mois)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id

# Exemple :
# NEXT_PUBLIC_FORMSPREE_ID=xpzgkqyw
```

## 🚀 Configuration Formspree

### 1. Créer un compte Formspree
- Aller sur [formspree.io](https://formspree.io)
- Créer un compte gratuit (50 soumissions/mois)

### 2. Créer un nouveau formulaire
1. Cliquer sur **New Form**
2. Nommer le formulaire "Newsletter LPCC"
3. Configurer l'email de destination : `lillepariscontrelecancer@gmail.com`
4. Copier l'ID du formulaire (ex: `xpzgkqyw`)

### 3. Configurer les notifications
1. Dans les paramètres du formulaire, configurer l'email de notification
2. Activer les notifications pour recevoir chaque inscription
3. Optionnel : configurer un webhook pour intégration avancée

### 4. Ajouter l'ID dans votre projet
1. Copier l'ID du formulaire Formspree
2. L'ajouter dans `.env.local` : `NEXT_PUBLIC_FORMSPREE_ID=votre_id`
3. Redémarrer votre serveur de développement

## ✅ Fonctionnalités RGPD incluses

### Collecte sécurisée
- Les données sont envoyées directement à votre email via Formspree
- Aucun stockage local dans le code source (repo public)
- Conformité RGPD automatique

### Consentement explicite
- Checkbox RGPD obligatoire dans le formulaire
- Lien vers la politique de confidentialité
- Information claire sur l'utilisation des données

### Gestion des contacts
- Réception directe dans votre boîte email
- Possibilité d'importer dans Google Contacts
- Facilité de suppression sur demande
- Lien vers la politique de confidentialité
- Information claire sur l'utilisation des données

### Désinscription facile
- Lien de désinscription automatique dans chaque email
- Gestion complète via l'interface Mailchimp

## 🔐 Sécurité

### ✅ Bonnes pratiques implémentées
- Variables d'environnement (jamais dans le code)
- Validation côté serveur des données
- Gestion des erreurs sans exposition d'informations sensibles
- API route sécurisée avec authentification Mailchimp

### ⚠️ Points d'attention
- Le fichier `.env.local` ne doit JAMAIS être commité
- Les API Keys doivent être régénérées si compromises
- Accès Mailchimp limité aux personnes autorisées de l'association

## 📊 Collecte des données

### Données collectées
- **Email** : obligatoire, pour l'envoi de la newsletter
- **Prénom** : optionnel, pour personnaliser les emails
- **Date d'inscription** : automatique, pour le suivi
- **Source** : tag "LPCC-Website" pour identifier l'origine

### Stockage
- Aucune donnée stockée localement
- Toutes les données sont dans Mailchimp (conforme RGPD)
- Accès sécurisé via votre compte Google de l'association

## 🧪 Tests recommandés

### Avant mise en production
1. Tester l'inscription avec votre propre email
2. Vérifier la réception de l'email de confirmation
3. Confirmer l'inscription via le lien
4. Tester la désinscription
5. Vérifier que les données apparaissent dans Mailchimp

### Tests d'erreur
- Email invalide
- Email déjà inscrit
- Consentement non coché
- API Key incorrecte

## 📝 Intégration dans le site

Le composant `FormulaireNewsletter` peut être intégré dans :
- Section Contact (si réactivée)
- Footer du site
- Page dédiée Newsletter
- Pop-up ou modal

Exemple d'utilisation :
```tsx
import { FormulaireNewsletter } from '@/components/Newsletter/FormulaireNewsletter';

// Dans votre composant
<FormulaireNewsletter />
```
