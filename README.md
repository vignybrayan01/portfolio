# Portfolio personnel

Portfolio statique réalisé uniquement avec **HTML, CSS et JavaScript classique**.

Aucune installation n’est nécessaire : il suffit d’ouvrir `index.html` dans le navigateur.

---

## Architecture du projet

```text
portfolio/
│
├── index.html
│
├── README.md
│
├── css/
│   └── style.css
│
├── data/
│   ├── profil.js
│   ├── experiences.js
│   ├── projets.js
│   ├── competences.js
│   └── contact.js
│
├── sections/
│   └── sections.js
│
├── js/
│   └── app.js
│
└── assets/
    ├── images/
    │   ├── profile.jpg
    │   └── projects/
    │       ├── projet-1.jpg
    │       ├── projet-2.jpg
    │       └── ...
    │
    └── documents/
        └── cv.pdf
```

---

## Rôle des fichiers

### `index.html`

Point d’entrée du portfolio.

Il charge dans l’ordre :

```text
CSS
↓
fichiers data
↓
sections.js
↓
app.js
```

Le site peut être lancé simplement en ouvrant :

```text
index.html
```

dans un navigateur.

---

## `css/style.css`

Contient tout le style du portfolio :

* couleurs ;
* thème sombre / clair ;
* navbar ;
* hero ;
* profil ;
* expériences ;
* projets ;
* compétences ;
* formation ;
* contact ;
* chatbot ;
* responsive ;
* animations.

---

## Dossier `data/`

Le dossier `data/` contient les informations personnelles à modifier.

### `data/profil.js`

Contient notamment :

* nom ;
* métier ;
* disponibilité ;
* présentation ;
* technologies principales ;
* statistiques ;
* formation ;
* certifications ;
* langues.

### `data/experiences.js`

Contient les expériences professionnelles et stages.

Pour ajouter une expérience, il suffit d’ajouter un nouvel objet dans le tableau `EXPERIENCES`.

### `data/projets.js`

Contient les projets du portfolio.

Pour ajouter un projet, il suffit d’ajouter un nouvel objet dans le tableau `PROJETS`.

### `data/competences.js`

Contient les différentes catégories de compétences techniques.

### `data/contact.js`

Contient :

* email ;
* téléphone ;
* WhatsApp ;
* LinkedIn ;
* textes de contact ;
* réponses du chatbot.

---

## `sections/sections.js`

Construit automatiquement le contenu HTML de la page à partir des informations présentes dans `data/`.

Il génère notamment :

```text
navbar
hero
profil
expériences
projets
compétences
formation
certifications
langues
contact
footer
chatbot
```

---

## `js/app.js`

Contient les interactions du portfolio :

* changement de thème ;
* changement de langue ;
* navigation ;
* scroll ;
* animations ;
* compteur ;
* effet typewriter ;
* boutons email / WhatsApp ;
* chatbot.

---

# Photo de profil

La photo de profil doit être placée ici :

```text
assets/images/profile.jpg
```

Le chemin utilisé dans `data/profil.js` doit être :

```js
photo: "./assets/images/profile.jpg"
```

Si tu changes le nom du fichier, par exemple :

```text
ma-photo.png
```

il faut également modifier :

```js
photo: "./assets/images/ma-photo.png"
```

---

# Images des projets

Les images des projets doivent être placées dans :

```text
assets/images/projects/
```

Exemple :

```text
assets/images/projects/mlops.jpg
assets/images/projects/rag.jpg
assets/images/projects/dashboard.jpg
```

Puis dans `data/projets.js` :

```js
image: "./assets/images/projects/mlops.jpg"
```

---

# CV téléchargeable

Le CV doit être placé dans :

```text
assets/documents/
```

Le nom recommandé est :

```text
assets/documents/cv.pdf
```

Dans `data/profil.js`, le chemin doit rester :

```js
cv: "./assets/documents/cv.pdf"
```

Les boutons de téléchargement du portfolio utiliseront automatiquement ce chemin.

Si le fichier s’appelle par exemple :

```text
CV_Zaineb_Ben_Fadhl.pdf
```

il faut modifier le chemin :

```js
cv: "./assets/documents/CV_Zaineb_Ben_Fadhl.pdf"
```

---

## Lancer le portfolio

Aucune installation n’est nécessaire.

Il suffit d’ouvrir :

```text
index.html
```

avec Chrome, Edge, Firefox ou un autre navigateur moderne.

Le site fonctionne avec des fichiers locaux classiques :

```text
HTML
CSS
JavaScript
```

sans :

```text
npm
Node.js
React
Vite
fetch()
serveur local
```

---

## Modifier le portfolio

Pour modifier le contenu, privilégier les fichiers du dossier :

```text
data/
```

Par exemple :

```text
Changer le nom        → data/profil.js
Changer la bio        → data/profil.js
Ajouter un stage      → data/experiences.js
Ajouter un projet     → data/projets.js
Changer les skills    → data/competences.js
Changer l'email       → data/contact.js
Changer LinkedIn      → data/contact.js
```

Le but est d’éviter de modifier directement `sections.js` ou `app.js` pour les changements de contenu courants.
