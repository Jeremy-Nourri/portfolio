# Portfolio Jérémy Nourri

Portfolio professionnel réalisé dans le cadre du **Mastère Expert en ingénierie du logiciel** (ISCOD). Il constitue le livrable évalué du module Portfolio : un site personnel qui présente mon parcours, mes compétences et mes réalisations.

---

## Sommaire

- [Objectif et contexte](#objectif-et-contexte)
- [Stack technique](#stack-technique)
- [Démarrage rapide](#démarrage-rapide)

---

## Objectif et contexte

Le portfolio répond à un cahier des charges précis, fourni sous forme de grille d'évaluation par l'ISCOD. Les exigences structurantes qui ont dirigé la conception :

| Exigence | Traduction dans le site |
| --- | --- |
| Prénom, nom et photo sur **toutes** les pages | En-tête persistant ([`SiteHeader`](src/components/layout/SiteHeader.tsx)) |
| Menu persistant au scroll, libellés courts | [`MainNav`](src/components/layout/MainNav.tsx), en-tête collant |
| Article de présentation générale détaillé | Page `/presentation`, alimentée par [`presentation.ts`](src/data/presentation.ts) |
| Vue synthétique des compétences | Schéma comparatif ([`CompetencesChart`](src/components/content/CompetencesChart.tsx)) sur `/competences` |
| Un article par compétence (10 attendues) | Pages `/competences/:slug`, structurées en définition, preuves, autocritique, évolution |
| Un article par réalisation | Pages `/realisations/:slug`, structurées en sections avec tableau de faits |
| Parcours et détail de chaque expérience | Page `/parcours`, chronologie anti-chronologique dépliable |
| Navigation circulaire | Liens croisés compétences ↔ réalisations ([`CrossLinks`](src/components/content/CrossLinks.tsx)) et sous-menus ([`SubNav`](src/components/content/SubNav.tsx)) |
| Espace contact | Page `/contact`, coordonnées centralisées dans [`site.ts`](src/config/site.ts) |

---

## Stack technique

| Domaine | Choix | Version |
| --- | --- | --- |
| Bibliothèque UI | React | 19 |
| Langage | TypeScript | 6 |
| Build & dev server | Vite | 8 |
| Routage | React Router | 7 (`createBrowserRouter`) |
| Styles | Tailwind CSS + PostCSS | 3.4 |
| Qualité | ESLint (flat config), `typescript-eslint`, `eslint-plugin-react-hooks` | 9 |

---

## Démarrage rapide

Prérequis : **Node.js 20+** et npm.

```bash
npm install
npm run dev
```
