# Marianne Long - Landing Page

Landing page moderne et professionnelle pour Marianne Long, Avocat spécialisé en IT / Data / IA / Cybersécurité.

## 🚀 Technologies

- **React 18** avec TypeScript
- **Vite** pour le build et le développement
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Validation de formulaires** côté client

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Hero.tsx                 # Section hero avec CTAs
│   ├── ContactForm.tsx          # Formulaire de contact avec validation
│   ├── CalendlyWidget.tsx      # Intégration Cal.com
│   ├── ProfessionalTimeline.tsx # Timeline du parcours professionnel
│   ├── ExpertiseGrid.tsx       # Grille des domaines d'expertise
│   ├── ApproachSection.tsx     # Section approche différenciante
│   └── TestimonialsCarousel.tsx # Carrousel de témoignages
├── App.tsx                      # Composant principal
├── main.tsx                     # Point d'entrée
└── index.css                    # Styles globaux Tailwind
```

## 🎨 Palette de Couleurs

- **Primary**: `#CE8F8A` (Rose corail)
- **Light**: `#FBF0E9` (Beige clair)
- **Dark**: `#805050` (Marron foncé)
- **Accent**: `#D4C2A1` (Beige doré)
- **Neutral**: `#AD9C92` (Gris beige)

## 🛠️ Installation

```bash
npm install
```

## 📝 Scripts

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Linter le code

## 🔧 Configuration Cal.com

Pour intégrer Cal.com, modifiez l'URL dans `src/components/CalendlyWidget.tsx` :

```typescript
const calUrl = 'https://cal.com/VOTRE_USERNAME'
// Ou pour un événement spécifique :
const calUrl = 'https://cal.com/VOTRE_USERNAME/EVENT_SLUG'
```

## 📄 Documentation des Composants

### Hero
Section principale avec présentation et deux CTAs (Contact et RDV Cal.com).

**Props**: Aucune

### ContactForm
Formulaire de contact avec validation côté client.

**Props**:
- `onClose: () => void` - Fonction de fermeture du modal

**Validation**:
- Nom requis
- Email requis et valide
- Message requis
- Téléphone optionnel

### CalendlyWidget
Widget Cal.com en iframe avec modal.

**Props**:
- `onClose: () => void` - Fonction de fermeture du modal

### ProfessionalTimeline
Timeline interactive du parcours professionnel avec animations.

**Données**: Voir `src/components/ProfessionalTimeline.tsx` pour la structure des données.

### ExpertiseGrid
Grille des domaines d'expertise avec effets hover.

**Données**: Voir `src/components/ExpertiseGrid.tsx` pour la structure des données.

### ApproachSection
Section mettant en avant l'approche différenciante avec points clés.

**Props**: Aucune

### TestimonialsCarousel
Carrousel de témoignages avec navigation et animations.

**Données**: Voir `src/components/TestimonialsCarousel.tsx` pour la structure des données.

## 🎯 Objectifs de Conversion

- ✅ Crédibilité via parcours prestigieux (Timeline)
- ✅ Prise de RDV directe sans barrière (Cal.com)
- ✅ Image moderne et accessible (Design + Formulaires)
- ✅ Architecture modulaire pour extensions futures

## 📱 Responsive Design

Le site est entièrement responsive avec une approche mobile-first. Tous les composants s'adaptent aux différentes tailles d'écran.

## 🚀 Déploiement

### GitHub Pages (Recommandé)

Le projet est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions.

#### Configuration automatique (via GitHub Actions)

1. **Activer GitHub Pages dans les paramètres du dépôt** :
   - Allez dans Settings → Pages
   - Sous "Source", sélectionnez "GitHub Actions"

2. **Le déploiement se fait automatiquement** :
   - À chaque push sur la branche `main`, le site sera automatiquement déployé
   - Le workflow est défini dans `.github/workflows/deploy.yml`

3. **Votre site sera disponible à** :
   - `https://prcaen.github.io/marianne-long-avocat`

#### Déploiement manuel (alternative)

Si vous préférez déployer manuellement :

```bash
npm run build
npm run deploy
```

#### Domaine personnalisé

Si vous utilisez un domaine personnalisé (comme `long-avocat.com`), le fichier `CNAME` est déjà configuré. Assurez-vous d'ajouter un enregistrement DNS CNAME pointant vers `prcaen.github.io` dans les paramètres de votre domaine.

### Autres options d'hébergement

Le projet peut également être déployé sur :
- Vercel
- Netlify
- AWS S3 + CloudFront

Les fichiers de production seront dans le dossier `dist/` après `npm run build`.

## 🔄 Extension Future

L'architecture modulaire permet d'ajouter facilement de nouvelles sections :
1. Créer un nouveau composant dans `src/components/`
2. L'importer dans `src/App.tsx`
3. L'ajouter dans le rendu principal

