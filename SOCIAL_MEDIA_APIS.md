# 📱 APIs Réseaux Sociaux - Guide d'intégration

## 🎯 Objectif
Intégrer automatiquement les contenus de vos réseaux sociaux dans votre site web sans maintenance manuelle.

## 📊 État des APIs par plateforme

### ✅ **YouTube** - Facile à intégrer
**API YouTube Data v3** (Gratuite)
- ✅ **Disponible** : API officielle Google
- ✅ **Quota gratuit** : 10,000 unités/jour
- ✅ **Données accessibles** : Vidéos, playlists, statistiques
- ✅ **Widgets officiels** : Intégration iframe simple

**Implémentation recommandée :**
```javascript
// API Key requise (gratuite)
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCxxxxx'; // Votre channel ID

// Récupérer les dernières vidéos
fetch(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=6`)
```

### ⚠️ **Instagram** - Complexe mais possible
**Instagram Basic Display API** (Gratuite avec limitations)
- ⚠️ **Limitations** : Nécessite authentification utilisateur
- ⚠️ **Processus** : App Facebook Developer + Review
- ✅ **Données accessibles** : Posts, images, légendes
- ❌ **Pas de widget officiel simple**

**Alternative recommandée :**
- **Instagram Feed Widget** (services tiers comme SnapWidget, Elfsight)
- **Intégration manuelle** avec mise à jour périodique

### ❌ **Facebook** - Très restrictive
**Facebook Graph API** 
- ❌ **Complexe** : Nécessite App Review Facebook
- ❌ **Limitations** : Accès très restreint aux posts publics
- ❌ **Maintenance** : Tokens expiration fréquente

**Alternative recommandée :**
- **Facebook Page Plugin** (widget officiel)
- **Intégration manuelle** avec screenshots

### ❌ **LinkedIn** - Pas d'API publique
**LinkedIn API**
- ❌ **Pas accessible** : Réservé aux partenaires LinkedIn
- ❌ **Pas de widget** : Pas de solution officielle

**Alternative recommandée :**
- **Intégration manuelle** avec mise à jour périodique
- **LinkedIn Company Page Widget** (limité)

### ❌ **TikTok** - API très limitée
**TikTok for Developers**
- ❌ **Très restrictive** : Accès sur demande uniquement
- ❌ **Pas de widget** : Pas de solution simple
- ❌ **Embed limité** : Seulement vidéos individuelles

**Alternative recommandée :**
- **Intégration manuelle** avec embed de vidéos spécifiques
- **Capture d'écran** avec liens vers TikTok

## 🚀 Solutions recommandées par priorité

### 1. **YouTube** - À implémenter en priorité
```typescript
// src/components/ReseauxSociaux/YouTubeFeed.tsx
const YouTubeFeed = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetch('/api/youtube-feed')
      .then(res => res.json())
      .then(data => setVideos(data.items));
  }, []);
  
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {videos.map(video => (
        <div key={video.id} className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            className="w-full h-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};
```

### 2. **Instagram** - Widget tiers ou manuel
```html
<!-- Option 1: Service tiers (SnapWidget) -->
<iframe src="https://snapwidget.com/embed/xxxxx" class="snapwidget-widget"></iframe>

<!-- Option 2: Intégration manuelle avec données statiques -->
```

### 3. **Facebook** - Page Plugin officiel
```html
<!-- Facebook Page Plugin -->
<div class="fb-page" 
     data-href="https://www.facebook.com/lillepariscontrelecancer"
     data-tabs="timeline"
     data-width="500"
     data-height="600"
     data-small-header="false"
     data-adapt-container-width="true"
     data-hide-cover="false"
     data-show-facepile="true">
</div>
```

### 4. **LinkedIn & TikTok** - Intégration manuelle
- Mise à jour manuelle périodique (1x/semaine)
- Screenshots + liens vers les posts originaux
- Système de gestion de contenu simple

## 🛠️ Implémentation progressive

### Phase 1 : YouTube API (Immédiat)
1. Créer une clé API YouTube (gratuite)
2. Implémenter `/api/youtube-feed`
3. Créer le composant `YouTubeFeed`
4. Remplacer le contenu statique

### Phase 2 : Widgets officiels (Semaine 1)
1. Intégrer Facebook Page Plugin
2. Tester les widgets Instagram tiers
3. Optimiser les performances

### Phase 3 : Système manuel (Semaine 2)
1. Interface admin simple pour LinkedIn/TikTok
2. Système de cache pour les images
3. Automatisation partielle

## 🔧 Configuration requise

### Variables d'environnement
```bash
# YouTube API
YOUTUBE_API_KEY=your_youtube_api_key
YOUTUBE_CHANNEL_ID=your_channel_id

# Facebook App (si nécessaire)
FACEBOOK_APP_ID=your_app_id

# Instagram (si API utilisée)
INSTAGRAM_ACCESS_TOKEN=your_access_token
```

### Dépendances
```json
{
  "googleapis": "^118.0.0",
  "facebook-sdk": "^3.0.0"
}
```

## 📈 Avantages de chaque approche

### APIs automatiques (YouTube)
- ✅ Contenu toujours à jour
- ✅ Pas de maintenance manuelle
- ✅ Statistiques en temps réel
- ❌ Dépendance aux APIs externes
- ❌ Quotas et limitations

### Widgets officiels (Facebook)
- ✅ Intégration simple
- ✅ Design cohérent avec la plateforme
- ✅ Pas de maintenance
- ❌ Contrôle limité du design
- ❌ Performance variable

### Intégration manuelle (LinkedIn, TikTok)
- ✅ Contrôle total du design
- ✅ Performance optimale
- ✅ Pas de dépendance externe
- ❌ Maintenance manuelle requise
- ❌ Contenu pas toujours à jour

## 🎯 Recommandation finale

**Approche hybride recommandée :**
1. **YouTube** : API automatique (priorité 1)
2. **Facebook** : Widget officiel
3. **Instagram** : Widget tiers ou manuel
4. **LinkedIn/TikTok** : Intégration manuelle avec interface admin

Cette approche offre le meilleur équilibre entre automatisation et contrôle, tout en respectant les limitations de chaque plateforme.
