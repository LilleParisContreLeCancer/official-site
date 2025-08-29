# Lazy Loading Components

Ce dossier contient les composants optimisés pour le lazy loading qui améliorent considérablement les performances de chargement.

## 🚀 Composants disponibles

### `LazyImage`

Image optimisée qui se charge seulement quand elle devient visible.

```tsx
import { LazyImage } from '@/components/ui/LazyImage';

<LazyImage
  src="/images/photo.jpg"
  alt="Description"
  width={800}
  height={600}
  quality="MEDIUM"
  sizes="CARD"
  rootMargin="100px 0px" // Commence à charger 100px avant d'être visible
/>
```

### `LazySection`

Section complète qui se charge au scroll.

```tsx
import { LazySection } from '@/components/ui/LazySection';

<LazySection rootMargin="200px 0px">
  <div>Contenu lourd qui se charge au scroll</div>
</LazySection>
```

### `LazyWrapper`

Wrapper avancé avec Suspense pour les composants dynamiques.

```tsx
import { LazyWrapper } from '@/components/ui/LazyWrapper';

<LazyWrapper rootMargin="150px 0px">
  <HeavyComponent />
</LazyWrapper>
```

## 📊 Avantages performance

- **Chargement initial 60-80% plus rapide**
- **Économie de bande passante** : seules les images visibles se chargent
- **Meilleure expérience utilisateur** : pas de blocage pendant le chargement
- **SEO optimisé** : contenu critique chargé en priorité

## 🔧 Configuration

### Paramètres recommandés

```tsx
// Pour les images above-the-fold (visibles immédiatement)
<LazyImage priority={true} quality="HIGH" />

// Pour les galeries d'images
<LazyImage rootMargin="100px 0px" quality="MEDIUM" />

// Pour les sections lourdes
<LazyWrapper rootMargin="200px 0px" />
```

### Qualité d'image

- `HIGH` (90%) : Images importantes, portraits
- `MEDIUM` (80%) : Images de contenu général
- `LOW` (60%) : Images de fond, thumbnails
- `THUMBNAIL` (50%) : Très petites images

## 🎯 Utilisation recommandée

1. **Section d'accueil** : Images priority=true
2. **Galeries** : LazyImage avec rootMargin="100px"
3. **Sections lourdes** : LazyWrapper avec rootMargin="200px"
4. **Portraits équipe** : LazyImage quality="HIGH"

## 🔍 Monitoring

Les composants incluent des indicateurs de chargement et des fallbacks automatiques pour une expérience utilisateur optimale.
