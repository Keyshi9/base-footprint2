# Base Footprint

Ce projet React/Vite permet de connecter un wallet (MetaMask, Rabby, WalletConnect, etc.) et d'envoyer une transaction sur la blockchain Base à moindre coût pour obtenir une empreinte DeFi.

## Fonctionnalités
- Connexion multi-wallet (MetaMask, Rabby, WalletConnect)
- Détection et switch automatique sur le réseau Base
- Envoi de transaction faible coût
- Estimation des frais
- Interface moderne et responsive
- Déploiement sur GitHub Pages

## Installation

1. Installe Node.js (https://nodejs.org/)
2. Clone le repo :
   ```sh
   git clone https://github.com/Keyshi9/base-footprint2.git
   cd base-footprint2
   ```
3. Installe les dépendances :
   ```sh
   npm install
   ```
4. Lance le serveur local :
   ```sh
   npm run dev
   ```

## Déploiement sur GitHub Pages

1. Ajoute la configuration dans `vite.config.js` :
   ```js
   export default defineConfig({
     base: '/base-footprint2/',
     // ...
   })
   ```
2. Ajoute le package de déploiement :
   ```sh
   npm install --save-dev gh-pages
   ```
3. Ajoute les scripts dans `package.json` :
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Déploie :
   ```sh
   npm run deploy
   ```

## Personnalisation
Modifie le composant principal pour adapter l'UI ou les fonctionnalités selon tes besoins.

---

Pour toute question, ouvre une issue sur le repo GitHub.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
