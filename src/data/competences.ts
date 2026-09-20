import type { Block, Preuve } from './content'

export type Domaine = 'technique' | 'humaine'

export type Competence = {
  slug: string
  title: string
  shortTitle: string
  domaine: Domaine
  level?: number
  niveau?: string
  teaser: string
  definition: Block[]
  preuves: Preuve[]
  autocritique: Block[]
  evolution: Block[]
  realisations: string[]
  realisationsLabels?: string[]
  draft?: boolean
}

export const competences: Competence[] = [
  {
    slug: 'frontend-react',
    title: 'Développement frontend, React et JavaScript',
    shortTitle: 'Frontend React',
    domaine: 'technique',
    level: 7,
    niveau: 'Intermédiaire',
    teaser:
      "Construire des interfaces qui répondent vite et qui restent lisibles par l'équipe qui les reprend.",
    definition: [
      {
        kind: 'p',
        text: "React est aujourd'hui la bibliothèque JavaScript la plus utilisée pour construire des interfaces web dynamiques. Sa logique de composants réutilisables et d'état applicatif s'est imposée comme un standard, aussi bien dans les startups que dans les grands groupes.",
      },
      {
        kind: 'p',
        text: "Dans un contexte où l'expérience utilisateur est devenue un critère de différenciation à part entière, savoir construire une interface qui reste réactive sous la charge réelle des données est une compétence de base pour un développeur d'applications web.",
      },
    ],
    preuves: [
      {
        title: 'Une interface de back office reconstruite en React',
        realisation: 'back-office-custom',
        blocks: [
          {
            kind: 'p',
            text: "Pour un client e-commerce dont j'assurais la maintenance, l'interface native de Magento était jugée lourde et lente par les équipes qui l'utilisaient tous les jours. À partir des besoins recueillis auprès des utilisateurs, j'ai développé une interface de back office sur mesure en React, connectée à l'API Magento.",
          },
          {
            kind: 'p',
            text: "Le périmètre a été volontairement réduit aux tâches réellement quotidiennes : commandes, factures, clients, catalogue. J'ai organisé le code par domaine, avec dans chaque dossier ses appels à l'API, ses composants, ses hooks et ses schémas de validation. Les données passent par TanStack Query, qui les garde en cache une minute au lieu de les redemander à chaque clic, et les formulaires sont validés avec React Hook Form et Zod avant d'atteindre le serveur. La création de commande, la partie la plus délicate, est un assistant en sept étapes qui ne permet d'avancer que lorsque l'étape en cours est complète.",
          },
          {
            kind: 'p',
            text: "**Le résultat se mesure côté utilisateur** : les lenteurs et les timeouts ont disparu sur les tâches courantes, et l'interface s'est alignée sur les usages réels des équipes. **Ma valeur ajoutée** n'a pas été seulement technique, elle a consisté à traduire des retours de terrain en une interface qui fait gagner du temps tous les jours à ceux qui s'en servent.",
          },
        ],
      },
      {
        title: "Une application mobile React Native et un tableau de bord Next.js pour un réseau de franchises",
        realisation: 'app-mobile-photographe',
        blocks: [
          {
            kind: 'p',
            text: "Pour Pix'Vert, un réseau de photographie scolaire, j'ai créé et structuré l'application mobile en React Native avec Expo, celle où les clients réservent une séance photo, et j'ai construit une partie du tableau de bord Next.js que les franchisés utilisent pour suivre leur activité. Le premier est un projet mobile, le second une application web à trois rôles, mais les deux reposent sur le même socle : React, TanStack Query pour les données, Zod pour valider ce qui entre, Zustand pour l'état partagé.",
          },
          {
            kind: 'p',
            text: "Le problème qui m'a le plus appris est arrivé sur mobile. Après les premiers écrans, l'application était rangée par fonctionnalité, et chaque nouvelle fonctionnalité recréait ses propres appels à l'API, ses propres schémas et ses propres composants. J'ai tout réorganisé par couche : écrans, composants, hooks par domaine, dépôt d'accès à l'API, schémas, stores. Chaque réponse de l'API passe par un schéma Zod avant d'être utilisée, ce qui a fait remonter très tôt les écarts entre ce que l'API renvoyait et ce que l'écran attendait.",
          },
          {
            kind: 'p',
            text: "**Le résultat** : cette structure a tenu jusqu'à 43 écrans et 1 150 tests unitaires sans être réorganisée une seconde fois, et 51 parcours Maestro de bout en bout la vérifient sur simulateur. Sur le tableau de bord, la garde d'accès par rôle est appliquée dans le middleware Next.js, côté serveur, et 59 scénarios Playwright vérifient rôle par rôle ce que chacun peut ouvrir. **Ma valeur ajoutée** a été de choisir tôt une structure et de la tenir, alors que le projet était encore petit et que rien ne l'imposait.",
          },
        ],
      },
      {
        title: 'Des exercices progressifs tout au long de la formation',
        blocks: [
          {
            kind: 'p',
            text: "En parallèle, plusieurs exercices pratiques ont jalonné ma formation React. Autant d'occasions de tester des patterns différents, de me confronter à des erreurs et d'affiner ma compréhension du fonctionnement de la bibliothèque. Ces itérations répétées ont construit une base solide, même si des zones d'inconfort subsistent.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "Mon niveau est intermédiaire. Je suis à l'aise avec les fondamentaux : composants, props, hooks courants, gestion d'état. Deux sujets restent à consolider, l'optimisation des performances et les patterns d'architecture sur des projets de grande taille.",
      },
      {
        kind: 'p',
        text: "Mon expérience de React Native, sur l'application mobile du même client, est en revanche limitée. J'en connais les principes mais pas encore les spécificités du développement mobile : navigation, gestion des plateformes, contraintes de performance sur appareil. Je préfère l'annoncer que laisser croire à une compétence mobile équivalente à ma pratique web.",
      },
      {
        kind: 'p',
        text: "C'est une compétence centrale dans mon profil, présente dans la quasi-totalité des projets frontend que j'aurai à mener. Ma progression a été rapide sur les bases, plus lente sur les aspects avancés.",
      },
      {
        kind: 'p',
        text: "**Mon conseil** : ne pas chercher à apprendre React en théorie. Les progrès les plus rapides viennent des projets concrets, même imparfaits.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "Next.js, le framework React orienté rendu serveur, s'impose comme le standard pour les applications React en production. Je l'ai mis en œuvre pour la première fois en contexte professionnel sur le dashboard de l'application mobile du client photographe. C'est à cette occasion que j'ai travaillé le rendu côté serveur, qui consiste à générer les pages sur le serveur plutôt que dans le navigateur, avec un bénéfice direct sur le temps d'affichage initial et sur le référencement.",
      },
      {
        kind: 'p',
        text: "Ce premier passage en conditions réelles m'a appris quelque chose que la théorie ne dit pas : le choix n'est pas binaire. Dans une même application, certaines pages gagnent à être rendues côté serveur, d'autres restent plus pertinentes en rendu client. Savoir arbitrer page par page, c'est ce qui sépare l'usage réel de Next.js de sa simple installation.",
      },
      {
        kind: 'p',
        text: "Il me reste à approfondir la gestion du cache et de la revalidation des données, les Server Components de l'App Router, et l'optimisation au-delà des réglages par défaut du framework. À moyen terme, je vise un niveau avancé sur React et Next.js, capable de concevoir et de maintenir des applications frontend performantes et bien référencées.",
      },
    ],
    realisations: ['back-office-custom', 'app-mobile-photographe'],
  },

  {
    slug: 'backend-api',
    title: 'Développement backend, Node.js, NestJS, Java Spring et API REST',
    shortTitle: 'Backend et API',
    domaine: 'technique',
    level: 8,
    niveau: 'Intermédiaire',
    teaser:
      "Concevoir des API dont le comportement est prévisible pour celui qui les consomme.",
    definition: [
      {
        kind: 'p',
        text: "Le développement backend couvre toute la logique serveur d'une application : traitement des données, règles métier, sécurité, et exposition de ces données via une API. Deux écosystèmes dominent aujourd'hui le marché, Node.js et son framework structurant NestJS côté JavaScript, et Java Spring côté entreprise, retenu sur les systèmes de longue durée de vie.",
      },
      {
        kind: 'p',
        text: "La maîtrise des API REST est transversale aux deux. C'est le point de contact entre le serveur et tout ce qui le consomme, et c'est souvent là que se joue la maintenabilité réelle d'un projet.",
      },
    ],
    preuves: [
      {
        title: "Une authentification qui ne fait pas confiance au téléphone",
        realisation: 'app-mobile-photographe',
        blocks: [
          {
            kind: 'p',
            text: "Sur l'API NestJS de Pix'Vert, j'ai écrit le module d'authentification qui sert l'application mobile et le tableau de bord. L'application mobile propose la connexion par Google et par Apple. La solution rapide aurait été de laisser le téléphone envoyer l'identité de l'utilisateur à l'API. Le problème, c'est qu'une requête peut être forgée : rien ne prouve que cette identité vient bien de Google.",
          },
          {
            kind: 'p',
            text: "J'ai fait vérifier le jeton par l'API elle-même, auprès du fournisseur : le jeton Google est contrôlé sur le point de vérification de Google, le jeton Apple est vérifié avec les clés publiques d'Apple, émetteur et audience compris. Autour, j'ai ajouté ce qu'un module d'authentification exposé sur internet doit avoir : jetons JWT courts avec rafraîchissement et révocation, politique de mot de passe, réinitialisation en une opération atomique, et limitation du nombre de tentatives.",
          },
          {
            kind: 'p',
            text: "**Le résultat** : une identité qui ne peut pas être usurpée depuis un client modifié, et un module couvert par des tests unitaires dès sa première version. **Ma valeur ajoutée** a été de me méfier de ce qui semblait le plus simple. Le client mobile n'est pas une source de confiance, même quand c'est nous qui l'avons écrit.",
          },
        ],
      },
      {
        title: "Un contrat d'erreur unique entre une API Spring et son client Vue",
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Sur Project Flow, le backend Java Spring exposait dix-neuf routes REST, et le client consommait leurs erreurs sans aucune convention. Chaque appel devinait la forme de la réponse en échec, si bien que les composants Vue finissaient par mélanger logique métier et plomberie HTTP. Le problème n'était pas de faire fonctionner l'API, mais de la rendre prévisible pour celui qui la consomme, moi compris deux semaines plus tard.",
          },
          {
            kind: 'p',
            text: "J'ai traité l'API et son client comme un seul contrat. Côté serveur, seize exceptions métier typées et un `@ControllerAdvice` qui associe à chacune un code HTTP et une structure de réponse identique. Côté client, un intercepteur axios qui normalise toute erreur en `{status, message}`. Un cas d'erreur donné produit désormais toujours la même réponse, quelle que soit la route qui le déclenche.",
          },
          {
            kind: 'p',
            text: "**Résultat** : les composants Vue ne gèrent plus une seule erreur HTTP à la main, la gestion d'erreur du front se réduit à un aiguillage sur des codes connus. **Ma valeur ajoutée** a été de concevoir ce contrat des deux côtés en même temps, au lieu de traiter le front et le back comme deux chantiers séparés. C'est cette décision, pas le framework, qui a supprimé la duplication.",
          },
        ],
      },
      {
        title: 'Une déconnexion réellement effective avec des JWT sans état',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Toujours sur Project Flow, l'authentification repose sur des JWT et une session `STATELESS`. Or un JWT signé reste valide jusqu'à son expiration : vider le `localStorage` du navigateur ne déconnecte personne, le jeton reste utilisable par quiconque l'a intercepté. Le besoin métier, pouvoir couper l'accès d'un compte compromis, entrait donc en contradiction directe avec la propriété même du mécanisme choisi.",
          },
          {
            kind: 'p',
            text: "J'ai arbitré en connaissance de cause. À la déconnexion, le jeton est inscrit dans une table `token_blacklist` que la validation interroge à chaque requête authentifiée. **Résultat** : une déconnexion qui coupe réellement l'accès. **Le prix**, que j'assume et que je sais nommer, est un accès en base par requête réintroduit dans une architecture conçue pour ne pas en avoir, et une table qu'il aurait fallu purger périodiquement, ce que je n'ai pas fait.",
          },
          {
            kind: 'p',
            text: "**Ma valeur ajoutée** ici n'est pas l'implémentation, qui est simple, mais d'avoir identifié le compromis au lieu de le subir. J'ai choisi de dégrader une propriété technique pour satisfaire une exigence de sécurité, et je peux justifier ce choix.",
          },
        ],
      },
      {
        title: 'Un BFF NestJS pour un back office e-commerce',
        realisation: 'back-office-custom',
        blocks: [
          {
            kind: 'p',
            text: "Pour le back office d'une boutique de robes en ligne sous Magento, j'ai placé une API NestJS entre l'interface React et Magento, sur le principe du Backend For Frontend : une API qui existe pour servir des écrans précis, pas pour exposer des données en général.",
          },
          {
            kind: 'p',
            text: "Il y avait deux problèmes à régler. Appeler Magento depuis le navigateur aurait obligé à y déposer un jeton qui ouvre toute la boutique. Et les réponses de Magento ne sont pas pensées pour un écran : catégories en arbre imbriqué, adresses dans un format que le panier refuse, messages d'erreur de formes différentes selon l'appel, et rien pour produire une facture en PDF.",
          },
          {
            kind: 'p',
            text: "L'API garde le jeton côté serveur et propose des routes taillées pour chaque écran. Elle remet l'arbre des catégories à plat, convertit les adresses, traduit toutes les erreurs de Magento avec une seule fonction et génère les factures en PDF avec Puppeteer. Elle absorbe aussi les surprises : l'appel de création de panier renvoie en fait le panier existant du client, ce qui faisait s'accumuler les articles d'une prévisualisation de commande à l'autre. C'est l'API qui vide ce panier avant chaque calcul, et l'interface n'en sait rien.",
          },
          {
            kind: 'p',
            text: "**Le résultat** : l'interface ne manipule aucun format Magento, et le jeton d'accès ne quitte jamais le serveur. **Ma valeur ajoutée** a été de concentrer toute la complexité de Magento dans une seule couche, ce qui m'a permis d'ajouter ensuite les commandes, les clients et les produits sans réécrire la logique d'appel à chaque fois.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "Mon niveau est intermédiaire sur chacune de ces stacks. Je sais concevoir et développer une API fonctionnelle, structurer un projet backend et choisir les patterns adaptés à des cas courants. Ce qui reste à approfondir : la sécurité avancée et la tenue en charge.",
      },
      {
        kind: 'p',
        text: "Mon vrai point de progression est en amont du code : savoir dire pourquoi NestJS plutôt que Spring, un monolithe plutôt que des services séparés, selon le contexte du projet et pas selon ce que je connais déjà.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "L'axe prioritaire est la culture architecturale : apprendre à analyser un besoin puis à choisir la stack la plus adaptée, plutôt que de reproduire systématiquement ce que je maîtrise. Cela passe par la pratique, mais aussi par une veille régulière sur les patterns backend, Clean Architecture, Domain Driven Design et architectures distribuées.",
      },
    ],
    realisations: ['project-flow', 'app-mobile-photographe', 'back-office-custom'],
  },

  {
    slug: 'donnees-sql',
    title: 'Gestion des données, SQL et NoSQL',
    shortTitle: 'Données SQL / NoSQL',
    domaine: 'technique',
    level: 6,
    niveau: 'Intermédiaire',
    teaser:
      "Modéliser une base qui supporte les évolutions du métier sans devenir un frein.",
    definition: [
      {
        kind: 'p',
        text: "La gestion des données est au cœur de toute application : sans une base bien conçue, même un bon code applicatif devient fragile. Les bases SQL comme PostgreSQL reposent sur un modèle relationnel structuré, adapté à des données cohérentes et interdépendantes. Les bases NoSQL adoptent des approches plus souples, pensées pour des volumes massifs ou des structures variables.",
      },
      {
        kind: 'p',
        text: "La plupart des projets combinent aujourd'hui les deux selon les besoins. Savoir modéliser, organiser et faire vivre une base de données reste une compétence socle pour un développeur fullstack.",
      },
    ],
    preuves: [
      {
        title: "Unifier les bases d'un réseau de franchises dans un schéma PostgreSQL",
        realisation: 'unification-bdd',
        blocks: [
          {
            kind: 'p',
            text: "Pendant mon alternance, j'ai travaillé avec le tech lead sur les données de Pix'Vert, un réseau de franchises de photographie scolaire. Elles étaient réparties entre deux bases MySQL, plusieurs API PHP et un webservice utilisé par des logiciels .NET. Chaque franchisé devait en plus modifier la structure de sa base à la main à chaque évolution de ces logiciels.",
          },
          {
            kind: 'p',
            text: "Nous avons d'abord fait l'inventaire complet : chaque route, chaque table, la base où elle se trouve. Certaines tables absentes des exports ont dû être retrouvées en remontant du code PHP jusqu'à sa configuration, puis reconstituées à partir des requêtes SQL. Nous avons ensuite conçu à deux un schéma PostgreSQL unique pour tout le réseau.",
          },
          {
            kind: 'p',
            text: "**Le résultat** : une base unifiée, aujourd'hui en recette avec la nouvelle API NestJS, le tableau de bord et l'application mobile, et qui supprimera à terme les modifications manuelles chez les franchisés. **Ma valeur ajoutée** a été dans l'analyse : établir une cartographie fiable d'un système que personne ne connaissait en entier, en séparant clairement ce qui était vérifié de ce qui était déduit.",
          },
        ],
      },
      {
        title: "Une relation métier modélisée par une table de jonction enrichie",
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Sur Project Flow, un même utilisateur pouvait être administrateur d'un projet et simple membre d'un autre. La relation entre l'utilisateur et le projet portait donc une information propre, le rôle, qu'une association classique ne sait pas exprimer.",
          },
          {
            kind: 'p',
            text: "J'ai modélisé cette relation par une entité de jonction enrichie, `UserProject`, portant le rôle et la date d'ajout en plus des deux clés étrangères. **C'est la décision de modélisation la plus structurante du projet** : tout le système d'autorisation en découle.",
          },
          {
            kind: 'p',
            text: "J'ai également traité un problème de requêtes en cascade repéré dans les logs Hibernate à l'affichage du tableau, avec une requête ciblée qui ramène le projet et ses colonnes en une seule passe, plutôt qu'en changeant la stratégie de chargement de tout le modèle.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est intermédiaire.** Mon expérience est centrée sur PostgreSQL et, dans une moindre mesure, MySQL. Je suis à l'aise avec la modélisation relationnelle, l'écriture de requêtes, la gestion des relations et la reprise d'une base existante. Mon travail sur les bases NoSQL reste limité, c'est un angle que je n'ai pas encore pratiqué en contexte professionnel.",
      },
      {
        kind: 'p',
        text: "Je considère cette compétence comme un socle : une mauvaise conception de base pèse sur toute la durée de vie d'un projet. J'y apporte donc une attention particulière dès la conception.",
      },
      {
        kind: 'p',
        text: "Un point que j'ai payé sur Project Flow : j'ai laissé Hibernate générer le schéma au lieu de le versionner avec un outil de migration. Cela va vite en développement et cela devient un risque dès qu'on parle de production. Je sais aujourd'hui que c'est une décision à prendre au premier jour, pas à la fin.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "L'étape suivante est d'approfondir les bases NoSQL, MongoDB ou Redis, pour savoir choisir le bon type de stockage selon le contexte. Je veux aussi progresser sur la performance : indexation, optimisation des requêtes, tenue en charge.",
      },
      {
        kind: 'p',
        text: "À moyen terme, l'objectif est de maîtriser les deux paradigmes et de savoir justifier mes choix de modélisation devant une équipe ou un client.",
      },
    ],
    realisations: ['unification-bdd', 'project-flow'],
  },

  {
    slug: 'qualite-devops',
    title: 'Qualité logicielle, tests et CI/CD',
    shortTitle: 'Qualité et CI/CD',
    domaine: 'technique',
    level: 5,
    niveau: 'En consolidation',
    teaser:
      "Savoir ce que les tests couvrent, et surtout savoir où ils sont aveugles.",
    definition: [
      {
        kind: 'p',
        text: "Les tests sont le filet de sécurité de tout projet qui dure. Ils vérifient qu'une fonctionnalité se comporte comme attendu, et surtout ils détectent les régressions qui apparaissent sur du code qui fonctionnait avant une modification. Dans un contexte où les bases de code grossissent et où plusieurs développeurs interviennent en parallèle, tester n'est plus une option, c'est une discipline de fond.",
      },
      {
        kind: 'p',
        text: "La chaîne d'intégration continue prolonge la même idée à l'échelle de l'équipe : automatiser la vérification et la livraison pour que la mise en production cesse d'être un événement à risque.",
      },
    ],
    preuves: [
      {
        title: 'Tests unitaires avec Vitest et Jest sur mes projets front et NestJS',
        realisation: 'app-mobile-photographe',
        realisationLabel: 'API client photographe',
        blocks: [
          {
            kind: 'p',
            text: "Sur mes projets front et NestJS, j'ai mis en place des tests unitaires, Vitest côté front et Jest côté NestJS, pour sécuriser les fonctionnalités développées. Mon réflexe est de les lancer avant chaque push, pour vérifier qu'une modification n'a rien cassé en amont. Ce process simple a évité plusieurs régressions qui seraient passées inaperçues.",
          },
        ],
      },
      {
        title: "Découvrir l'angle mort de son propre dispositif de test",
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Sur Project Flow, j'ai écrit vingt et un tests JUnit et Mockito sur les services métier du backend. La séparation systématique entre interface et implémentation les rendait possibles sans démarrer de contexte Spring : chaque comportement métier était vérifié en isolant complètement ses dépendances. Sur le papier, la couche critique était couverte.",
          },
          {
            kind: 'p',
            text: "En auditant ce dépôt dix-neuf mois plus tard, j'ai découvert qu'une route, `GET /api/users/{id}`, n'était protégée par aucun contrôle d'appartenance : n'importe quel compte connecté pouvait lire la fiche d'un autre. Mes tests étaient tous verts.",
          },
          {
            kind: 'p',
            text: "**En cherchant pourquoi, j'ai compris que le problème n'était pas la quantité de tests mais leur point d'application.** Des tests de service qui mockent leurs dépendances ne font jamais passer la requête par les contrôleurs ni par l'aspect d'autorisation. J'avais testé la logique métier et laissé sans filet toute la couche qui décide qui a le droit de l'appeler.",
          },
          {
            kind: 'p',
            text: "**Le résultat de ce diagnostic** est un critère que j'applique depuis : un test qui ne traverse pas le mécanisme qu'il prétend couvrir ne le couvre pas. Concrètement, seul un test de contrôleur avec MockMvc aurait détecté cette faille, en s'appuyant sur deux dépendances déjà présentes dans le projet et jamais utilisées.",
          },
          {
            kind: 'p',
            text: "**Ma valeur ajoutée** n'est pas d'avoir évité l'erreur, je ne l'ai pas évitée. Elle est d'être allé la chercher dans mon propre code et d'avoir su remonter du symptôme à la cause méthodologique. Savoir où ses tests sont aveugles me paraît aujourd'hui plus utile que d'en aligner davantage.",
          },
        ],
      },
      {
        title: 'Une chaîne de livraison conteneurisée, et ce quelle a coûté',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Sur le même projet, j'ai conteneurisé les deux applications avec des images multi-étapes et écrit un pipeline GitLab CI en quatre étapes : tests, build, construction des images et publication sur le registre. Chaque commit produit ainsi un livrable identifié.",
          },
          {
            kind: 'p',
            text: "L'enseignement est ailleurs. Sur soixante-treize commits, une trentaine portent sur le pipeline, les variables d'environnement et Docker, pas sur le produit. **Près d'un tiers du projet.** C'est un ratio que je n'avais pas anticipé et que je sais maintenant provisionner quand j'estime une charge.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est en consolidation.** Je teste, mais pas encore de façon systématique. Les tests unitaires sont un réflexe sur les fonctionnalités critiques, la couverture de mes projets reste partielle. Les tests d'intégration et de bout en bout sont des territoires que je n'ai pas encore vraiment explorés en pratique.",
      },
      {
        kind: 'p',
        text: "L'audit de Project Flow m'a aussi appris à distinguer deux choses que je confondais : installer un outil de qualité et s'en servir. J'avais déclaré un analyseur statique dans mon projet sans jamais l'exécuter, et branché un outil de couverture dont personne, moi le premier, n'a jamais lu le rapport.",
      },
      {
        kind: 'p',
        text: "**Mon conseil, tiré de cette erreur** : quand on met en place un outil de qualité, écrire d'abord la vérification qui échoue s'il est débranché. Un seuil de couverture, un job qui casse. Sinon on installe un décor.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "L'objectif à moyen terme est d'élargir ma pratique aux tests d'intégration et aux tests de bout en bout, avec des outils comme Cypress ou Playwright côté frontend, et MockMvc côté Spring.",
      },
      {
        kind: 'p',
        text: "Je veux également progresser sur le développement piloté par les tests, une approche qui consiste à écrire le test avant le code et qui change la façon de concevoir une fonctionnalité. Project Flow a démontré par la négative ce que coûte l'inverse : des tests écrits après cinq semaines de développement valident ce que le code fait, pas ce qu'il devrait faire.",
      },
    ],
    realisations: ['project-flow', 'app-mobile-photographe', 'back-office-custom'],
  },

  {
    slug: 'architecture',
    title: 'Architecture logicielle',
    shortTitle: 'Architecture',
    domaine: 'technique',
    level: 4,
    niveau: 'En consolidation',
    teaser:
      "Choisir un découpage, savoir le nommer précisément, et le tenir dans la durée.",
    definition: [
      {
        kind: 'p',
        text: "L'architecture logicielle regroupe les décisions structurelles qui organisent un système : comment les composants sont découpés, comment ils communiquent, comment les responsabilités sont réparties. Ces choix conditionnent la maintenabilité et la lisibilité d'un projet sur le long terme.",
      },
      {
        kind: 'p',
        text: "Dans un contexte où les applications deviennent plus complexes et plus durables, savoir choisir une architecture et surtout la justifier est une des marques distinctives d'un ingénieur logiciel par rapport à un développeur qui exécute.",
      },
    ],
    preuves: [
      {
        title: 'Une architecture modulaire orientée fonctionnalités avec NestJS',
        realisation: 'app-mobile-photographe',
        blocks: [
          {
            kind: 'p',
            text: "Sur mes projets NestJS, j'ai appliqué l'architecture modulaire préconisée par le framework : le code est organisé par domaine métier, chaque module regroupant ses propres contrôleurs, services et providers. Ce découpage favorise la séparation des responsabilités et permet d'ajouter un domaine sans toucher aux autres.",
          },
          {
            kind: 'p',
            text: "Travailler avec cette philosophie m'a appris à penser le code non comme une suite de fichiers mais comme un ensemble de blocs cohérents et indépendants.",
          },
        ],
      },
      {
        title: 'Une règle de sécurité transverse traitée par abstraction',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Sur Project Flow, l'autorisation ne pouvait pas reposer sur les rôles globaux de Spring Security : le droit d'un utilisateur dépend du **projet** sur lequel il agit, administrateur ici, simple membre ailleurs. La solution évidente aurait été de commencer chaque méthode de service par un contrôle de rôle. Je l'ai écartée : elle dispersait une règle de sécurité dans une quinzaine de méthodes, où il suffisait d'un oubli à l'ajout d'une fonctionnalité pour ouvrir une brèche.",
          },
          {
            kind: 'p',
            text: "J'ai traité l'autorisation comme une **préoccupation transversale**. Deux annotations, `@CheckProjectAuthorization` et `@CheckUserAuthorization`, sont interceptées par un aspect qui vérifie l'appartenance au projet avant l'exécution de la méthode. Le contrôle d'accès devient déclaratif : la politique de sécurité se lit sur la signature de la méthode, pas dans son corps.",
          },
          {
            kind: 'p',
            text: "**Résultat** : une règle définie à un seul endroit pour dix-neuf routes, et une politique d'accès qu'un développeur découvre en lisant les en-têtes de méthodes. **Ma valeur ajoutée** a été de reconnaître la nature transversale du problème là où le réflexe aurait été de dupliquer un `if`.",
          },
          {
            kind: 'p',
            text: "J'ai depuis audité cette implémentation et identifié trois fragilités, détaillées dans l'article de la réalisation, dont une dépendance de sécurité qui n'était pas déclarée explicitement. Ce recul fait partie de la compétence autant que la conception initiale.",
          },
        ],
      },
      {
        title: 'Une architecture en couches tenue jusqu\'au bout, et vérifiable',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Toujours sur Project Flow, j'ai structuré le backend en couches strictes, du contrôleur au service puis au repository, avec des objets de transfert dédiés en entrée et en sortie reliés par des mappers. La difficulté d'un tel découpage n'est pas de le concevoir, elle est de **le tenir** quand une fonctionnalité serait plus rapide à écrire en le contournant.",
          },
          {
            kind: 'p',
            text: "Le résultat est vérifiable dans le dépôt, et c'est ce qui compte : aucun contrôleur n'injecte de repository, et aucune entité de persistance ne franchit la frontière HTTP. Trois objets de réponse distincts coexistent d'ailleurs pour une même entité selon le contexte d'appel, afin de ne pas exposer plus de données que l'écran n'en demande.",
          },
          {
            kind: 'p',
            text: "**Ma valeur ajoutée** est cette discipline sur la durée. Le découplage entre l'API et le modèle de persistance fait qu'une évolution du schéma interne n'oblige pas à casser le contrat exposé, un bénéfice invisible le jour où on l'écrit et décisif le jour où on modifie.",
          },
          {
            kind: 'p',
            text: "Je précise le vocabulaire parce que la nuance compte : ce n'est **pas** du MVC, il n'y a pas de vue côté serveur, et ce n'est pas non plus de l'hexagonal, puisque les services dépendent directement des interfaces de persistance sans port ni adaptateur. C'est une architecture en couches, et savoir la nommer exactement fait partie de la compétence.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est en consolidation, et c'est la compétence où j'ai le plus de chemin à faire.** Je n'ai pas encore eu à concevoir l'architecture d'un système large. Mes expériences restent à une échelle où une architecture en couches ou modulaire suffit. Je connais les principes de la Clean Architecture et du Domain Driven Design, j'en comprends l'intérêt, je ne les ai pas mis en œuvre sur un projet d'envergure.",
      },
      {
        kind: 'p',
        text: "C'est la compétence qui compte le plus dans mon projet professionnel, puisque c'est elle qui sépare le développeur de l'ingénieur. C'est aussi celle où l'écart entre ce que je sais expliquer et ce que j'ai réellement pratiqué est le plus grand, et je préfère le dire.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "C'est mon axe de progression le plus structurant. À moyen terme, je veux monter en compétence sur la Clean Architecture et le Domain Driven Design, d'abord en les étudiant sur des projets personnels, puis en les appliquant en contexte professionnel.",
      },
      {
        kind: 'p',
        text: "Une chose a déjà changé grâce à l'audit de Project Flow : j'écris désormais les décisions d'architecture au moment où je les prends, sous forme de notes courtes. Sur ce projet, toutes les décisions décrites ici ont dû être reconstituées en relisant le code, elles n'étaient consignées nulle part.",
      },
    ],
    realisations: ['project-flow', 'app-mobile-photographe', 'back-office-custom', 'unification-bdd'],
  },

  {
    slug: 'travail-equipe',
    title: 'Travail en équipe et collaboration',
    shortTitle: 'Travail en équipe',
    domaine: 'humaine',
    teaser:
      "Tenir un cap collectif quand les demandes changent plus vite que la backlog.",
    definition: [
      {
        kind: 'p',
        text: "Le travail en équipe est une compétence fondamentale du développement professionnel. Un projet n'est presque jamais l'œuvre d'une seule personne : il suppose des échanges constants, une organisation partagée, la capacité à synchroniser son travail avec celui des autres et à gérer les frictions inévitables d'un collectif.",
      },
      {
        kind: 'p',
        text: "Dans un contexte agile où les équipes travaillent en cycles courts, savoir collaborer compte autant que savoir coder.",
      },
    ],
    preuves: [
      {
        title: "Un CRM pour une agence immobilière, à quatre développeurs",
        realisation: 'crm-immobilier',
        blocks: [
          {
            kind: 'p',
            text: "Sur ce projet, nous étions quatre développeurs, avec une collègue occupant un rôle hybride entre développeuse et product owner. L'organisation reposait sur un point quotidien, une revue hebdomadaire de la backlog, et des outils partagés : Trello, Google Workspace et Git.",
          },
          {
            kind: 'p',
            text: "La principale difficulté ne venait pas du code mais du client. Des besoins en évolution constante et des attentes instables rendaient difficile la stabilisation du périmètre à développer. L'équipe a dû trouver un équilibre entre réactivité et cadrage, accepter les ajustements sans perdre le fil de ce qui avait été validé.",
          },
          {
            kind: 'p',
            text: "Cette expérience m'a appris que la collaboration ne s'arrête pas aux frontières de l'équipe. Elle inclut la relation client, avec ce qu'elle suppose de négociation et de gestion des attentes.",
          },
        ],
      },
      {
        title: 'Un projet mené seul, et ce que cette solitude a coûté',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "La preuve inverse est parfois la plus parlante. Project Flow a été développé seul, sans relecteur : soixante-treize commits de la même main, six demandes de fusion que j'ai ouvertes puis fusionnées moi-même.",
          },
          {
            kind: 'p',
            text: "J'avais mis en place des garde-fous personnels, le passage systématique par branche et par demande de fusion même sans relecteur, ce qui force à relire son propre travail comme un ensemble cohérent plutôt que commit par commit. L'audit du dépôt a montré la limite de l'exercice : plusieurs défauts de sécurité y sont exactement ce qu'une paire d'yeux extérieurs aurait vu en dix minutes.",
          },
          {
            kind: 'p',
            text: "**Ce que j'en retire** est une conviction, pas une théorie : la revue de code n'est pas un rituel de process, c'est un dispositif de détection que rien ne remplace, et surtout pas la discipline individuelle.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est solide.** Je suis à l'aise en équipe : les rituels agiles, les outils collaboratifs et la communication quotidienne sont devenus des réflexes. Ce que je dois développer, c'est la capacité à prendre la parole plus fermement quand un cadrage s'impose, en particulier face à un client dont les demandes déstabilisent l'organisation collective.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "À mesure que je gagne en expérience, je souhaite élargir mon rôle dans les équipes : ne pas rester dans l'exécution technique, mais contribuer à la structuration des projets, à la clarification des besoins et à la dynamique collective. Une évolution naturelle vers des responsabilités de lead technique.",
      },
    ],
    realisations: ['crm-immobilier', 'project-flow', 'unification-bdd', 'app-mobile-photographe'],
  },

  {
    slug: 'adaptabilite',
    title: 'Adaptabilité',
    shortTitle: 'Adaptabilité',
    domaine: 'humaine',
    teaser: "Devenir utile sur une stack inconnue sans attendre de la maîtriser.",
    definition: [
      {
        kind: 'p',
        text: "L'adaptabilité est la capacité à faire face à l'inconnu sans se paralyser : une nouvelle technologie, un contexte qui change, une contrainte imprévue. Dans le développement logiciel, elle est sollicitée en permanence, car les stacks évoluent et il est rare qu'un développeur travaille toujours dans un environnement qu'il maîtrise.",
      },
      {
        kind: 'p',
        text: "Apprendre vite, s'appuyer sur les bonnes ressources et rester efficace malgré l'incertitude est une qualité que le marché valorise autant que les compétences techniques.",
      },
    ],
    preuves: [
      {
        title: 'Maintenir un back office Magento sans connaître ni Magento ni PHP',
        realisation: 'back-office-custom',
        blocks: [
          {
            kind: 'p',
            text: "Durant mon alternance, j'ai repris la maintenance d'un back office Magento, une plateforme e-commerce en PHP, alors que je ne connaissais ni l'outil ni le langage. Les missions étaient variées : résoudre des dysfonctionnements récurrents comme les problèmes de réindexation, gérer des mises à jour de plugins parfois instables, et répondre à des demandes de nouvelles fonctionnalités.",
          },
          {
            kind: 'p',
            text: "J'ai adopté une approche pragmatique : documentation intensive, lecture des ressources officielles et communautaires, et échanges réguliers avec une collègue qui avait déjà travaillé sur la plateforme. Capitaliser sur son expérience m'a fait gagner un temps précieux et évité des erreurs coûteuses.",
          },
          {
            kind: 'p',
            text: "**Résultat** : j'ai pu répondre aux demandes de façon autonome et assurer une maintenance fiable du back office. **Ma valeur ajoutée** a moins été technique que méthodologique, savoir dans quel ordre chercher et à qui demander pour devenir utile vite sur un terrain inconnu.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est solide, et c'est une des compétences sur lesquelles je m'appuie le plus.** Cette expérience m'a confirmé quelque chose sur ma façon de fonctionner : face à l'inconnu, je ne panique pas, je cherche. La documentation, les échanges avec les pairs et l'expérimentation sont mes premiers réflexes.",
      },
      {
        kind: 'p',
        text: "Ce qu'il me reste à développer, c'est la vitesse et la structure de cette montée en compétence. J'apprends efficacement mais de façon encore trop empirique.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "L'adaptabilité se cultive par l'exposition volontaire à des contextes variés. Je continue donc à choisir des projets aux stacks différentes plutôt que de me cantonner à ce que je connais, c'est la meilleure façon de rester agile face aux évolutions du secteur.",
      },
    ],
    realisations: ['back-office-custom'],
  },

  {
    slug: 'autonomie',
    title: 'Autonomie et prise d\'initiative',
    shortTitle: 'Autonomie',
    domaine: 'humaine',
    teaser: "Débloquer un besoin flou avant qu'il ne se transforme en code à refaire.",
    definition: [
      {
        kind: 'p',
        text: "L'autonomie ne se résume pas à travailler sans supervision. Elle suppose d'identifier les blocages, de prendre des décisions éclairées et d'agir sans attendre qu'on vous dise quoi faire, tout en sachant quand escalader vers les bonnes personnes.",
      },
      {
        kind: 'p',
        text: "La prise d'initiative va un cran plus loin : anticiper un problème avant qu'il ne devienne bloquant. Ces deux qualités sont particulièrement attendues dans les équipes agiles, où chaque développeur est acteur du projet et pas seulement exécutant.",
      },
    ],
    preuves: [
      {
        title: "Cadrer un besoin flou sur l'application mobile d'un photographe",
        realisation: 'app-mobile-photographe',
        blocks: [
          {
            kind: 'p',
            text: "Lors du développement d'une application mobile pour un client photographe, deux réunions avaient permis de recueillir les besoins fonctionnels. En avançant, je me suis aperçu que certains restaient insuffisamment détaillés, en particulier le système de réservation, qui devait gérer des profils très différents : particuliers, écoles, entreprises, clubs sportifs.",
          },
          {
            kind: 'p',
            text: "Les informations manquantes étaient nombreuses et critiques : durée minimale d'une prestation, temps de battement entre deux réservations, créneaux possibles selon le type de client. Autant de détails sans lesquels il était impossible de développer une fonctionnalité cohérente.",
          },
          {
            kind: 'p',
            text: "Plutôt que d'avancer sur des hypothèses ou d'attendre que le problème remonte de lui-même, j'ai rédigé un questionnaire précis, ciblé sur cette seule fonctionnalité, et je l'ai transmis à ma collègue en charge de la relation client. **Résultat** : des développements à refaire évités, et l'avancement débloqué sur une fonctionnalité centrale.",
          },
        ],
      },
      {
        title: 'Mener un projet complet du cadrage à la soutenance',
        realisation: 'project-flow',
        blocks: [
          {
            kind: 'p',
            text: "Project Flow a été conçu, développé, testé, conteneurisé et présenté seul, sans commanditaire pour arbitrer ni relecteur pour valider. Toutes les décisions structurantes, du modèle de données au mécanisme d'autorisation, m'appartiennent.",
          },
          {
            kind: 'p',
            text: "**Ce que cette autonomie a produit** : une application fonctionnelle en quarante-six jours et une compréhension de bout en bout de la chaîne, du schéma de base jusqu'à la publication des images. **Ce qu'elle a coûté** : personne pour dire que le périmètre suffisait, et un projet qui s'est arrêté sur une contrainte extérieure plutôt que sur une livraison. Je sais aujourd'hui que l'autonomie a besoin d'un point d'arrêt défini à l'avance.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**Mon niveau est solide.** Ces situations m'ont confirmé que l'autonomie s'exprime autant dans la gestion des imprévus que dans l'exécution technique : je suis à l'aise pour identifier ce qui bloque et structurer une réponse.",
      },
      {
        kind: 'p',
        text: "Je dois encore progresser sur l'anticipation de ces zones floues dès la phase de cadrage, avant de commencer à coder. Aujourd'hui je les détecte en avançant, ce qui est déjà mieux que de les découvrir à la livraison, mais plus tard qu'il ne faudrait.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "Je veux développer une meilleure culture du cadrage en amont : poser les bonnes questions dès les premières réunions client, détecter les angles morts d'une spécification avant qu'ils ne deviennent des problèmes en cours de développement. Une compétence qui touche autant à l'analyse qu'à la communication.",
      },
    ],
    realisations: ['app-mobile-photographe', 'project-flow'],
  },

  {
    slug: 'empathie',
    title: 'Empathie et écoute',
    shortTitle: 'Empathie et écoute',
    domaine: 'humaine',
    teaser: "Transformer des irritants répétés en une solution que personne n'avait demandée.",
    definition: [
      {
        kind: 'p',
        text: "L'empathie professionnelle ne consiste pas seulement à être attentif aux autres, mais à transformer cette écoute en action utile. Dans le développement logiciel, elle prend tout son sens face aux utilisateurs finaux : comprendre leurs frustrations, identifier ce qui les freine au quotidien, traduire ces ressentis en solutions concrètes.",
      },
      {
        kind: 'p',
        text: "C'est ce qui distingue un développeur qui livre des fonctionnalités de celui qui résout des problèmes réels.",
      },
    ],
    preuves: [
      {
        title: "Une interface née de l'écoute, pas de la feuille de route",
        realisation: 'back-office-custom',
        blocks: [
          {
            kind: 'p',
            text: "Dans le cadre de la maintenance du Magento d'un client e-commerce, j'organisais deux fois par semaine un point avec les employés de l'entreprise, dans un format proche du daily, pour recueillir les bugs rencontrés et faire le point sur les nouvelles fonctionnalités.",
          },
          {
            kind: 'p',
            text: "Au fil de ces échanges, j'ai remarqué des problèmes récurrents qui n'étaient jamais remontés à la direction ni priorisés : lenteurs importantes, coupures fréquentes, interface native jugée lourde et complexe à utiliser. Ces irritants revenaient semaine après semaine et pénalisaient concrètement le travail des équipes sans jamais trouver de réponse.",
          },
          {
            kind: 'p',
            text: "J'ai consigné ces retours réunion après réunion, puis rédigé un questionnaire de huit questions permettant aux employés de formaliser leurs besoins et de les hiérarchiser eux-mêmes. À partir des réponses, j'ai développé une interface de back office allégée en React, connectée à l'API Magento.",
          },
          {
            kind: 'p',
            text: "**Résultat** : disparition des lenteurs sur les tâches courantes, interface simplifiée et alignée sur les usages réels, complexité perçue nettement réduite au quotidien. **Ce projet n'était pas dans la feuille de route.** Il est né d'une écoute attentive et de la décision de ne pas laisser ces problèmes sans réponse.",
          },
        ],
      },
    ],
    autocritique: [
      {
        kind: 'p',
        text: "**C'est mon point fort, et la compétence que je place en premier dans mon profil.** Cette expérience m'a montré que l'écoute active est une compétence à part entière : elle demande de la régularité, de la méthode et une vraie volonté de comprendre avant d'agir.",
      },
      {
        kind: 'p',
        text: "Ce que je dois développer, c'est structurer cette écoute dès le départ, sans attendre que les problèmes deviennent évidents, en intégrant des rituels de recueil de feedback dès le lancement d'un projet plutôt qu'en cours de route.",
      },
      {
        kind: 'p',
        text: "C'est la compétence que je place le plus haut dans mon profil, parce qu'elle vient de mes années en travail social et qu'elle continue de guider ma façon d'aborder une interface : qui est de l'autre côté, et qu'est-ce qui lui coûte du temps.",
      },
    ],
    evolution: [
      {
        kind: 'p',
        text: "Je souhaite approfondir l'UX et le design centré utilisateur, des disciplines qui formalisent cette approche et lui donnent une méthode. Comprendre comment concevoir une expérience à partir des besoins réels est une direction dans laquelle je veux progresser.",
      },
    ],
    realisations: ['back-office-custom'],
  },

  {
    slug: 'competence-humaine-5',
    title: 'Cinquième compétence humaine',
    shortTitle: 'À définir',
    domaine: 'humaine',
    teaser: 'Compétence à choisir et à rédiger pour atteindre les dix exigées.',
    draft: true,
    definition: [],
    preuves: [],
    autocritique: [],
    evolution: [],
    realisations: [],
  },
]

export function getCompetenceBySlug(slug: string): Competence | undefined {
  return competences.find((c) => c.slug === slug)
}

export function competencesByDomaine(domaine: Domaine): Competence[] {
  return competences.filter((c) => c.domaine === domaine)
}
