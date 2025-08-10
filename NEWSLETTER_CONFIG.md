# 📧 Configuration Newsletter RGPD

## 🔒 Variables d'environnement requises

Pour activer la newsletter, vous devez configurer les variables suivantes dans votre fichier `.env.local` (jamais dans le repo public) :

```bash
# Configuration Mailchimp
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_LIST_ID=your_mailchimp_list_id_here
MAILCHIMP_SERVER_PREFIX=us1  # ou us2, us3, etc. selon votre compte

# Exemple complet :
# MAILCHIMP_API_KEY=abc123def456-us1
# MAILCHIMP_LIST_ID=1234567890
# MAILCHIMP_SERVER_PREFIX=us1
```

## 🚀 Configuration Mailchimp

### 1. Créer un compte Mailchimp
- Aller sur [mailchimp.com](https://mailchimp.com)
- Créer un compte gratuit (jusqu'à 500 contacts)

### 2. Obtenir l'API Key
1. Aller dans **Account & Billing** > **Extras** > **API Keys**
2. Cliquer sur **Create A Key**
3. Copier la clé générée (format: `abc123def456-us1`)

### 3. Créer une liste (Audience)
1. Aller dans **Audience** > **All contacts**
2. Cliquer sur **Create Audience**
3. Remplir les informations de votre association
4. Noter l'**Audience ID** (dans Settings > Audience name and defaults)

### 4. Identifier le Server Prefix
- Dans votre API Key, la partie après le tiret est votre server prefix
- Exemple : `abc123def456-us1` → server prefix = `us1`

## ✅ Fonctionnalités RGPD incluses

### Double Opt-in automatique
- L'inscription est en statut `pending` jusqu'à confirmation email
- Mailchimp envoie automatiquement l'email de confirmation
- L'utilisateur doit cliquer sur le lien pour finaliser l'inscription

### Consentement explicite
- Checkbox RGPD obligatoire dans le formulaire
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
