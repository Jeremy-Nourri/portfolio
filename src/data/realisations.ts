import type { Block } from './content'

export type Section = {
  title: string
  blocks: Block[]
}

export type Realisation = {
  slug: string
  title: string
  subtitle: string
  summary: string
  apercu?: string
  periode?: string
  stack?: string[]
  sections: Section[]
  chiffres?: { label: string; value: string }[]
  competences: string[]
  draft?: boolean
}

export const realisations: Realisation[] = [
  {
    slug: 'project-flow',
    title: 'Project Flow',
    subtitle: 'Plateforme collaborative de gestion de projets',
    summary:
      "Application web de gestion de projets en équipe, organisée autour d'un tableau à colonnes. Spring Boot et Vue 3, développée seul en 46 jours, présentée en soutenance.",
    apercu:
      "Un utilisateur crée un projet, le découpe en colonnes, y invite des collaborateurs avec un rôle, et l'équipe y range ses tâches. Spring Boot 3.4 et Java 17 côté serveur, Vue 3 et TypeScript côté client, Docker et intégration continue GitLab côté livraison.",
    periode: '6 décembre 2024 au 20 janvier 2025',
    stack: [
      'Java 17',
      'Spring Boot 3.4',
      'Spring Security',
      'Spring Data JPA',
      'MySQL',
      'JUnit 5',
      'Mockito',
      'Vue 3',
      'TypeScript',
      'Pinia',
      'Tailwind CSS',
      'Vitest',
      'Docker',
      'GitLab CI',
    ],
    competences: [
      'architecture',
      'backend-api',
      'donnees-sql',
      'frontend-react',
      'qualite-devops',
      'autonomie',
    ],
    chiffres: [
      { label: 'Période', value: '6 décembre 2024 au 20 janvier 2025, soit 46 jours' },
      { label: 'Commits', value: '73, tous de moi' },
      { label: 'Branches de fonctionnalité', value: '11, fusionnées par 6 demandes de fusion' },
      { label: 'Routes HTTP exposées', value: '19' },
      { label: 'Entités de persistance', value: '6' },
      { label: 'Tests', value: '21 tests JUnit sur 3 services, 19 tests Vitest sur 2 stores' },
      { label: 'Interface', value: '18 fichiers Vue, 1 790 lignes' },
      { label: 'Déploiement en production', value: 'aucun' },
    ],
    sections: [
      {
        title: 'Présentation du projet',
        blocks: [
          {
            kind: 'p',
            text: "Project Flow est une application web client et serveur de gestion de projets collaboratifs. Un utilisateur s'inscrit, crée un projet, le structure en colonnes représentant des états d'avancement, invite d'autres utilisateurs par leur adresse email en leur attribuant un rôle, administrateur ou membre, et l'équipe y crée, modifie et classe ses tâches.",
          },
          {
            kind: 'p',
            text: "Le dépôt réunit deux applications déployables séparément : une API REST Spring Boot et une application monopage Vue 3, orchestrées par un fichier `docker-compose.yml` unique.",
          },
          { kind: 'h', text: "Ce que le produit fait" },
          {
            kind: 'p',
            text: "Neuf parcours complets, de l'écran jusqu'à la base : inscription, connexion, déconnexion, création de projet, liste des projets séparée entre ceux que l'utilisateur a créés et ceux qu'il a rejoints, affichage du tableau et de ses colonnes, création et suppression de colonnes dans la limite de quatre par projet, gestion des tâches avec priorité, échéance et étiquette colorée, ajout d'un membre avec son rôle, et garde de navigation qui redirige vers la connexion en mémorisant la page demandée.",
          },
          { kind: 'h', text: "Ce qu'il ne fait pas" },
          {
            kind: 'p',
            text: "Autant l'annoncer plutôt que de le laisser découvrir : **il n'y a pas de glisser-déposer**. Le tableau est un affichage en colonnes, pas une surface manipulable à la souris, et le changement de colonne d'une tâche passe par un champ de formulaire. L'assignation d'une tâche à un utilisateur est modélisée en base mais n'est exposée par aucun écran.",
          },
        ],
      },
      {
        title: 'Objectifs, contexte, enjeux et risques',
        blocks: [
          {
            kind: 'p',
            text: "**Le contexte, sans détour** : projet personnel, conçu et développé seul, sans commanditaire, dans le cadre de la préparation du titre. Aucun client, aucun cahier des charges externe, aucune contrainte de délai imposée par un tiers. Le besoin est un prétexte assumé : construire de bout en bout une application dont la complexité métier oblige à traiter des problèmes que des exercices plus courts n'exposent jamais.",
          },
          { kind: 'h', text: "Premier enjeu : l'autorisation contextuelle" },
          {
            kind: 'p',
            text: "Savoir qui appelle est un problème résolu. Le vrai risque d'une application multi utilisateurs est ailleurs : l'élévation de privilèges horizontale. Un utilisateur authentifié qui devine l'identifiant d'un projet auquel il n'appartient pas doit être refusé, et le droit dépend du couple utilisateur plus projet, pas d'un rôle global. Ce besoin n'entre pas dans le modèle de rôles applicatifs de Spring Security.",
          },
          { kind: 'h', text: 'Deuxième enjeu : une relation qui porte une information' },
          {
            kind: 'p',
            text: "Un même utilisateur est administrateur d'un projet et simple membre d'un autre. La relation entre l'utilisateur et le projet porte donc une donnée propre, le rôle, ce qu'une association classique ne sait pas exprimer.",
          },
        ],
      },
      {
        title: 'Les étapes, ce que j\'ai fait',
        blocks: [
          {
            kind: 'p',
            text: "Le travail s'est étalé sur 46 jours et 73 commits, sur des branches de fonctionnalité fusionnées par demandes de fusion. Les branches n'ont jamais été supprimées après fusion : le cheminement complet reste consultable dans le dépôt.",
          },
          { kind: 'h', text: 'Modélisation' },
          {
            kind: 'p',
            text: "Six entités de persistance. La décision structurante est `UserProject`, une **table de jonction enrichie** portant le rôle et la date d'ajout en plus des deux clés étrangères, plutôt qu'une table d'association générée. Tout le système d'autorisation en découle.",
          },
          { kind: 'h', text: 'Architecture en couches' },
          {
            kind: 'p',
            text: "Du contrôleur au service puis au repository, avec une discipline tenue jusqu'au bout et vérifiable : aucun contrôleur n'injecte de repository, aucune entité de persistance ne franchit la frontière HTTP. Six objets d'entrée, neuf de sortie, six mappers écrits à la main. Trois objets de réponse distincts coexistent pour une même entité selon le contexte d'appel, le souci de ne pas exposer trop de données est explicite dans le code.",
          },
          { kind: 'h', text: 'Authentification' },
          {
            kind: 'p',
            text: "JWT signé en HMAC-SHA512, session sans état, filtre inséré avant le filtre d'authentification standard. Le constructeur de l'utilitaire de jeton lève une exception si le secret fait moins de 32 caractères, un garde-fou volontaire pour qu'une configuration faible échoue au démarrage plutôt qu'en silence. Un JWT étant par nature non révocable, la déconnexion inscrit le jeton dans une table interrogée à chaque requête : compromis assumé, qui réintroduit un accès en base dans une architecture voulue sans état.",
          },
          { kind: 'h', text: "Autorisation par programmation orientée aspect" },
          {
            kind: 'p',
            text: "C'est la décision technique la plus personnelle du projet. Plutôt que de répéter dans chaque méthode de service le contrôle « cet utilisateur a-t-il ce rôle sur ce projet », j'ai écrit deux annotations et un aspect qui les intercepte, lit le contexte de sécurité et vérifie l'appartenance au projet. La politique d'accès devient lisible sur la signature de la méthode. Ses fragilités sont réelles et je les détaille dans mon regard critique.",
          },
          { kind: 'h', text: 'Optimisation' },
          {
            kind: 'p',
            text: "Un problème de requêtes en cascade repéré en lisant les logs Hibernate à l'affichage du tableau, résolu par une requête ciblée qui ramène le projet et ses colonnes en une seule passe, plutôt qu'en changeant la stratégie de chargement de tout le modèle.",
          },
          { kind: 'h', text: "Contrat d'erreur" },
          {
            kind: 'p',
            text: "Seize exceptions métier typées et un gestionnaire global qui associe à chacune un code HTTP et une structure de réponse stable. Côté client, un intercepteur normalise ces réponses, ce qui a permis aux composants de ne plus gérer d'erreur HTTP à la main.",
          },
          { kind: 'h', text: 'Tests' },
          {
            kind: 'p',
            text: "JUnit et Mockito sur trois services serveur, 21 méthodes de test. Vitest sur deux stores côté client, 19 tests. Un outil de couverture branché sur le build. Ces tests sont arrivés en une seule fois après cinq semaines de développement, et la couverture s'en ressent.",
          },
          { kind: 'h', text: 'Industrialisation' },
          {
            kind: 'p',
            text: "Deux images Docker multi-étapes avec le cache des dépendances placé avant la copie des sources, un fichier de composition, et un pipeline en quatre étapes : tests, build, construction des images et publication sur le registre, avec des images identifiées par le commit.",
          },
        ],
      },
      {
        title: 'Les acteurs et les interactions',
        blocks: [
          {
            kind: 'p',
            text: "**Les acteurs du produit** sont au nombre de trois. L'administrateur, rôle attribué automatiquement au créateur, détient les droits d'écriture sur le projet, ses colonnes, ses tâches et sa liste de membres. Le membre consulte le projet et ses tâches. L'utilisateur non rattaché peut s'inscrire et se connecter, sans accès à un projet auquel il n'a pas été invité. La distinction est visible jusque dans l'interface, qui sépare les projets créés des projets rejoints.",
          },
          {
            kind: 'p',
            text: "**Les acteurs du projet, en revanche, se réduisent à un seul.** J'ai développé Project Flow seul, sans revue de code par un tiers.",
          },
          {
            kind: 'p',
            text: "Ce que j'ai mis en place pour compenser partiellement : le passage systématique par branche et demande de fusion même sans relecteur, ce qui force à relire son propre travail comme un ensemble cohérent plutôt que commit par commit, des messages de commit normalisés, et la conservation des branches après fusion. Cela ne remplace pas un relecteur, et l'audit du dépôt l'a démontré : plusieurs défauts listés plus bas sont exactement ce qu'une paire d'yeux extérieurs aurait vu en dix minutes.",
          },
        ],
      },
      {
        title: 'Les résultats',
        blocks: [
          {
            kind: 'p',
            text: "**Pour le produit.** L'application fonctionne en local sur les neuf parcours décrits plus haut, et elle a été présentée et démontrée en soutenance. Elle n'a **jamais été déployée sur un serveur** : l'étape de déploiement du pipeline lance la composition Docker à l'intérieur du runner, dans un environnement éphémère, si bien que les conteneurs démarrent puis disparaissent avec le job.",
          },
          {
            kind: 'p',
            text: "Le résultat le moins confortable est aussi le plus formateur : ce projet m'a appris ce que coûte une chaîne de livraison. Sur 73 commits, une trentaine portent sur le pipeline, les variables d'environnement et Docker, pas sur le produit. **Près d'un tiers du projet.** C'est un ratio que je n'avais pas anticipé et que je sais maintenant provisionner.",
          },
        ],
      },
      {
        title: 'Les lendemains du projet',
        blocks: [
          {
            kind: 'p',
            text: "Le projet est à l'arrêt et je ne l'ai pas repris. Ce que ces dix-neuf mois d'expérience professionnelle ont changé, c'est mon idée de par où le reprendre. En janvier 2025, j'aurais recommencé par les fonctionnalités : glisser-déposer, notifications en temps réel, jetons de rafraîchissement. Aujourd'hui je reprendrais dans cet ordre :",
          },
          {
            kind: 'ordered',
            items: [
              "Consolider le mécanisme d'autorisation : déclarer la bibliothèque dont il dépend, le couvrir par des tests, et le rendre moins fragile aux changements de signature des méthodes.",
              "Ajouter des tests de contrôleur, la seule chose qui aurait détecté le point précédent.",
              "Versionner le schéma de base avec un outil de migration.",
              'Seulement ensuite le produit : glisser-déposer, assignation de tâche, temps réel.',
            ],
          },
          {
            kind: 'p',
            text: "Cette inversion de priorités est la mesure la plus honnête de ce que ce projet, et l'alternance qui a suivi, m'ont apporté.",
          },
        ],
      },
      {
        title: 'Mon regard critique',
        blocks: [
          {
            kind: 'p',
            text: "J'ai audité mon propre dépôt en septembre 2026, méthodiquement, en partant du code et de l'historique plutôt que de mon souvenir. L'exercice a été inconfortable et c'est la partie la plus utile de ce projet.",
          },
          { kind: 'h', text: "Les fragilités de la solution dont j'étais le plus fier" },
          {
            kind: 'p',
            text: "L'autorisation par aspect est une bonne idée dont l'implémentation ne tient qu'à trois fils.",
          },
          {
            kind: 'list',
            items: [
              "La dépendance qui fournit le tissage d'aspects **n'est pas déclarée** dans le fichier de build, elle n'arrive que de façon transitive. Une montée de version de Spring Boot qui cesserait de la tirer désactiverait silencieusement tout le contrôle d'accès fin, sans erreur de compilation ni test rouge.",
              "Le ciblage capture le **premier argument** de la méthode et le traite comme un identifiant de projet. Une méthode déjà annotée reçoit un identifiant d'utilisateur en première position : il serait interprété comme un identifiant de projet le jour où on l'exposerait.",
              "La création de projet appelle en interne une méthode elle-même annotée. Cet appel interne contourne le proxy Spring, donc l'aspect ne s'exécute pas, et c'est précisément ce qui fait fonctionner la création. **Mon code est correct par accident de la mécanique de proxy, pas par intention.** C'est la ligne de cet audit qui m'a le plus appris.",
              "Cette pièce, la plus délicate du projet, est **la seule qui n'a aucun test** : les tests de service mockent leurs dépendances, l'aspect n'est jamais dans la boucle.",
            ],
          },
          {
            kind: 'p',
            text: "Une conséquence directe est passée inaperçue pendant huit mois : une route de lecture porte l'annotation d'autorisation **sans lui passer de rôle**, dont la valeur par défaut est une liste vide. Le test d'appartenance est donc toujours faux et la route renvoie systématiquement un refus. Elle est morte depuis le jour de son écriture.",
          },
          { kind: 'h', text: "Ce que j'ai déclaré et ce que j'ai fait" },
          {
            kind: 'p',
            text: "L'analyseur statique est déclaré dans le fichier de build et n'a jamais été exécuté, aucun job ne l'invoque. L'outil de couverture produit un rapport à chaque exécution des tests, mais sans seuil, sans archivage et sans personne pour le lire. Installer un outil de qualité n'est pas mesurer la qualité, et c'est une confusion que je faisais encore il y a un an.",
          },
          { kind: 'h', text: 'La couverture, sans arrondi' },
          {
            kind: 'p',
            text: "Trois services testés sur cinq. Les deux services qui portent le tableau, c'est-à-dire le cœur du produit, ne sont couverts par aucun test. Zéro test de contrôleur pour dix-neuf routes. Zéro test de rendu pour dix-huit composants et 1 790 lignes d'interface, alors que la bibliothèque de test est installée. Les tests sont arrivés en un seul commit après cinq semaines de code : écrits après, ils valident ce que le code fait, pas ce qu'il devrait faire.",
          },
          { kind: 'h', text: "Les compromis que j'assume" },
          {
            kind: 'list',
            items: [
              "Un schéma généré par l'ORM sans migration versionnée : gain de vitesse en développement, risque réel en production. Je savais que c'était temporaire, je ne l'ai pas remplacé.",
              "La base de données laissée hors de la composition Docker : la stack conteneurisée n'est pas autonome et exige une base sur la machine hôte.",
            ],
          },
          { kind: 'h', text: 'Ce que je retiens, en une phrase' },
          {
            kind: 'p',
            text: "J'ai passé ce projet à construire des mécanismes, un aspect d'autorisation, une hiérarchie d'exceptions, un pipeline, et j'ai systématiquement sous-estimé le travail qui consiste à **vérifier qu'ils sont branchés**. L'annotation posée nulle part, l'analyseur jamais lancé, la couverture jamais lue, le déploiement qui ne déploie rien, l'auditeur qui tourne à vide : c'est cinq fois la même erreur. Depuis, en alternance, c'est devenu mon premier réflexe sur toute mise en place d'outil, écrire d'abord la vérification qui échoue si l'outil est débranché.",
          },
        ],
      },
      {
        title: 'Ce que je referais autrement',
        blocks: [
          {
            kind: 'list',
            items: [
              "Écrire les tests de contrôleur en premier : ils auraient détecté la route morte.",
              'Déclarer explicitement toute dépendance dont dépend un mécanisme de sécurité.',
              'Séparer les configurations par environnement au lieu de chercher une configuration unique.',
              'Versionner le schéma de base dès le premier jour.',
              'Écrire les décisions au moment où on les prend, sous forme de notes courtes.',
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'back-office-custom',
    title: 'Back office sur mesure',
    subtitle: 'Interface métier allégée pour une équipe e-commerce',
    summary:
      "Un outil de gestion quotidienne pour une boutique de robes en ligne : commandes, factures, clients et catalogue, sans passer par l'administration Magento. React côté interface, NestJS entre l'interface et Magento.",
    apercu:
      "Les salariés d'une boutique en ligne se plaignaient de la lenteur de leur administration Magento. À partir de leurs retours, j'ai construit seul un back office qui couvre leurs tâches de tous les jours : une interface React, et une API NestJS qui parle à Magento à sa place.",
    periode: '3 décembre 2025 au 20 avril 2026',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'TanStack Query',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Tailwind CSS',
      'NestJS 11',
      'API REST Magento',
      'Bull et Redis',
      'Puppeteer',
      'Stripe',
      'Vitest',
      'Jest',
      'Docker',
      'nginx',
    ],
    competences: [
      'frontend-react',
      'backend-api',
      'architecture',
      'qualite-devops',
      'empathie',
      'adaptabilite',
    ],
    chiffres: [
      { label: 'Période', value: '3 décembre 2025 au 20 avril 2026' },
      { label: 'Dépôts', value: 'Deux, un pour l’interface et un pour l’API' },
      { label: 'Commits', value: '20 au total, tous de moi' },
      { label: 'Routes déclarées par l’API', value: '78, dont 8 en double' },
      { label: 'Interface', value: '236 fichiers TypeScript, 17 pages dont 2 masquées' },
      { label: 'API', value: '111 fichiers TypeScript, 8 modules' },
      { label: 'Tests de l’interface', value: '33 fichiers, 293 cas, Vitest et Testing Library' },
      { label: 'Tests de l’API', value: '18 fichiers, 150 cas, Jest' },
      { label: 'Base de données propre', value: 'Aucune, Magento reste la seule source' },
      { label: 'Environnement configuré', value: 'Préproduction' },
    ],
    sections: [
      {
        title: 'Présentation du projet',
        blocks: [
          {
            kind: 'p',
            text: "Promulias vend des robes en ligne, à des particuliers et à des professionnels. La boutique tourne sous Magento et compte quatre vitrines : en français et en anglais, pour la vente aux particuliers et pour la vente aux professionnels. Jusque-là, toute la gestion quotidienne passait par l'administration native de Magento : les commandes, les factures, les fiches clients, les prix, le stock, les photos.",
          },
          {
            kind: 'p',
            text: "Le back office sur mesure prend le relais pour ces tâches courantes. Il se compose de deux applications : une interface React, celle que les équipes utilisent, et une API NestJS placée entre cette interface et Magento. Le navigateur ne s'adresse jamais directement à Magento. Il ne connaît que l'API.",
          },
          { kind: 'h', text: "Ce que l'outil permet de faire" },
          {
            kind: 'list',
            items: [
              "**Commandes** : recherche avec filtres, export CSV, fiche détaillée, facturation, expédition, remboursement, annulation, commentaires, modification des articles, et création d'une commande complète en sept étapes, du choix du client jusqu'au paiement.",
              '**Factures** : liste filtrée par vitrine, par année et par client, et téléchargement de la facture en PDF.',
              '**Clients** : création, modification et suppression, gestion des adresses, réinitialisation du mot de passe.',
              "**Catalogue** : fiche produit avec prix, stock, images, vidéo, référencement et classes de taxe, création d'un produit décliné en tailles et en couleurs, ajout de nouvelles variantes à un produit existant.",
              "**Positions** : l'ordre dans lequel les produits apparaissent dans chaque catégorie de la boutique.",
            ],
          },
          { kind: 'h', text: "Ce qu'il ne fait pas encore" },
          {
            kind: 'p',
            text: "La création de produits en série, plusieurs couleurs d'un même modèle en une seule opération, n'est pas encore activée.",
          },
        ],
      },
      {
        title: 'Objectifs, contexte, enjeux et risques',
        blocks: [
          {
            kind: 'p',
            text: "J'ai connu Promulias par la maintenance. Dès le début de mon alternance, je m'occupais de leur Magento : réindexations qui échouaient, modules à mettre à jour, petites évolutions. Pour suivre tout ça, je faisais un point deux fois par semaine avec les salariés. Et d'une semaine sur l'autre, les mêmes plaintes revenaient : l'administration était lente, des opérations ordinaires tombaient en timeout, et il fallait beaucoup de clics pour des gestes répétés toute la journée.",
          },
          {
            kind: 'p',
            text: "Ces remarques ne remontaient pas plus haut et personne ne les traitait. J'ai commencé par les noter au fil des réunions. Puis j'ai préparé un questionnaire de huit questions pour que chacun dise ce qui le gênait et ce qui comptait le plus pour lui. Le périmètre du projet est sorti de ces réponses.",
          },
          { kind: 'h', text: 'Objectifs' },
          {
            kind: 'list',
            items: [
              "Rendre les tâches quotidiennes plus rapides qu'avec l'administration native.",
              "Ne garder que les écrans vraiment utilisés, avec les mots de l'équipe.",
              "Ne rien fragiliser dans la boutique : Magento reste la seule source de vérité, l'outil ne garde aucune donnée de son côté.",
            ],
          },
          { kind: 'h', text: 'Enjeux et risques' },
          {
            kind: 'p',
            text: "Le premier risque venait des données elles-mêmes. Une commande, un remboursement ou un prix professionnel ont une valeur directe : une erreur ne reste pas coincée dans un écran, elle arrive chez un client ou dans la comptabilité. Et au départ, je connaissais mal Magento, dont l'API a des comportements qu'on ne découvre qu'en s'en servant.",
          },
          {
            kind: 'p',
            text: "Le deuxième touchait à la sécurité. Pour fonctionner, l'outil a besoin d'un jeton qui ouvre l'API Magento en entier. Placé dans le navigateur, ce jeton aurait été lisible par quiconque ouvre les outils de développement, avec la main sur toute la boutique.",
          },
          {
            kind: 'p',
            text: "Le troisième, c'est que j'étais seul. Personne pour relire mon code ou repérer une erreur de conception avant qu'elle ne s'installe.",
          },
        ],
      },
      {
        title: "Les étapes, ce que j'ai fait",
        blocks: [
          {
            kind: 'p',
            text: "Le développement s'est étalé du 3 décembre 2025 au 20 avril 2026, en parallèle de la maintenance et de mes autres missions.",
          },
          { kind: 'h', text: 'Partir de la saisie la plus pénible' },
          {
            kind: 'p',
            text: "La première version ne faisait qu'une chose : un formulaire pour créer des produits groupés, parce que c'était la saisie qui prenait le plus de temps dans Magento. Le jour même, ce formulaire tenait déjà dans un seul fichier de 1 810 lignes. J'ai réorganisé l'interface avant d'aller plus loin : un dossier par domaine, commandes, clients, factures, produits, et dans chacun ses appels à l'API, ses composants, ses hooks, ses schémas de validation et ses types. C'est ce découpage qui m'a permis d'ajouter les écrans suivants sans perdre le fil.",
          },
          { kind: 'h', text: "Mettre une API entre l'interface et Magento" },
          {
            kind: 'p',
            text: "J'ai décidé de ne jamais appeler Magento depuis le navigateur. L'API NestJS garde le jeton Magento dans ses variables d'environnement et expose des routes pensées pour les écrans. Elle fait aussi tout le travail d'adaptation dont l'interface n'a pas à se soucier : l'arbre des catégories remis à plat, les adresses converties au format qu'attend le panier, les erreurs de Magento traduites en erreurs HTTP par une fonction commune, les factures mises en page en HTML puis converties en PDF avec Puppeteer.",
          },
          { kind: 'h', text: 'La connexion' },
          {
            kind: 'p',
            text: "On se connecte avec ses identifiants d'administration Magento. L'API demande un jeton à Magento et le range dans un cookie `HttpOnly` en `SameSite=strict`, que le JavaScript de la page ne peut pas lire. Une garde enregistrée pour toute l'application refuse ensuite chaque route qui n'est pas marquée publique. Côté interface, dès qu'une réponse 401 arrive, un intercepteur axios repasse l'utilisateur en état déconnecté.",
          },
          { kind: 'h', text: 'Les commandes, la partie la plus longue' },
          {
            kind: 'p',
            text: "Créer une commande depuis le back office semblait simple. Sauf que Magento ne sait calculer les modes de livraison et de paiement disponibles qu'à partir d'un panier. J'ai donc construit un assistant en sept étapes, client, vitrine, produits, adresse de livraison, mode de livraison, adresse de facturation, paiement, qui fait créer un panier temporaire par l'API pour proposer les bons choix. Le paiement par carte passe par Stripe.",
          },
          {
            kind: 'p',
            text: "C'est là que j'ai eu le bug le plus déroutant du projet : les articles s'accumulaient d'une prévisualisation à l'autre. En lisant les réponses de Magento, j'ai compris que l'appel censé créer un panier renvoie en réalité le panier déjà actif du client, s'il en a un. La correction consiste à vider ce panier avant chaque calcul. J'ai laissé un commentaire dans le code pour expliquer pourquoi, parce que rien dans le nom de l'appel ne le laisse deviner.",
          },
          { kind: 'h', text: 'Les tests' },
          {
            kind: 'p',
            text: "Côté interface, 33 fichiers de tests Vitest et Testing Library portent sur les schémas de validation, les hooks d'appel à l'API, l'assistant de commande et les pages principales. Côté API, 18 fichiers Jest couvrent surtout les factures, les positions, la génération de CSV, la validation des tailles et l'authentification.",
          },
          { kind: 'h', text: 'La livraison' },
          {
            kind: 'p',
            text: "Chaque application a son image Docker en deux étapes. L'interface est compilée puis servie par nginx, qui fait suivre les appels `/api` vers le conteneur de l'API. L'image de l'API installe un Chromium système pour que les PDF puissent être générés dans le conteneur. Le code a été fusionné sur la branche principale le 26 mars 2026, et l'API est configurée pour une interface de préproduction.",
          },
        ],
      },
      {
        title: 'Les acteurs et les interactions',
        blocks: [
          {
            kind: 'p',
            text: "**Les salariés de Promulias** sont les utilisateurs de l'outil, et ce sont eux qui en ont fixé les priorités : d'abord à travers ce qu'ils racontaient pendant les points de la semaine, ensuite à travers leurs réponses au questionnaire.",
          },
          {
            kind: 'p',
            text: "**Une collègue** qui avait déjà travaillé sur Magento m'a servi de repère pour comprendre la plateforme : l'organisation de ses données, ses différentes vitrines, les pièges connus. Sans ses explications, j'aurais passé beaucoup plus de temps à tâtonner dans l'API.",
          },
          {
            kind: 'p',
            text: "**Grow your business**, l'agence où je suis en alternance, porte la relation avec le client.",
          },
          {
            kind: 'p',
            text: "**L'hébergeur** du client s'occupe de la mise en ligne. Ce n'est pas moi qui déploie, alors j'ai rédigé pour lui une liste de déploiement : variables d'environnement, conteneurs Docker, configuration Apache.",
          },
          {
            kind: 'p',
            text: "Sur le plan technique, j'ai travaillé seul. Les 20 commits des deux dépôts sont les miens.",
          },
        ],
      },
      {
        title: 'Les résultats',
        blocks: [
          { kind: 'h', text: "Pour l'entreprise" },
          {
            kind: 'p',
            text: "L'équipe a un outil qui couvre son travail de tous les jours sans ouvrir l'administration Magento : commandes, factures, clients, fiches produits, ordre d'affichage du catalogue. Les lenteurs et les timeouts dont les salariés se plaignaient ont disparu sur ces tâches. Chaque écran ne demande à Magento que ce qu'il affiche, et les données déjà chargées restent en cache une minute dans le navigateur au lieu d'être redemandées à chaque clic.",
          },
          {
            kind: 'p',
            text: "Le jeton d'accès à Magento, lui, ne sort jamais du serveur.",
          },
          { kind: 'h', text: 'Pour moi' },
          {
            kind: 'p',
            text: "C'est le premier projet que j'ai mené de bout en bout, de l'écoute des utilisateurs jusqu'à l'image Docker. J'y ai appris à travailler avec une API que je ne contrôle pas : me fier à ses réponses plus qu'à sa documentation, regrouper ses bizarreries dans une seule couche, et empêcher ses formats de se répandre dans l'interface. C'est aussi la première fois que j'ai mis en place un Backend For Frontend sur un vrai projet.",
          },
        ],
      },
      {
        title: 'Les lendemains du projet',
        blocks: [
          {
            kind: 'p',
            text: "Dans l'immédiat, la création de produits en série est prête, mais il faut un serveur Redis chez l'hébergeur pour l'activer.",
          },
          {
            kind: 'p',
            text: "Plus loin, l'idée est que l'outil prenne en charge l'essentiel du travail courant, et que l'administration Magento ne serve plus qu'à configurer la boutique.",
          },
        ],
      },
      {
        title: 'Mon regard critique',
        blocks: [
          { kind: 'h', text: 'Des PDF qui peuvent laisser un navigateur ouvert' },
          {
            kind: 'p',
            text: "Pour produire une facture en PDF, l'API lance un Chromium complet avec Puppeteer, lui fait afficher la facture en HTML, l'imprime, puis le referme. Le problème, c'est l'endroit où je le referme : l'appel à `browser.close()` se trouve dans le bloc `try`, juste avant le retour. Si quelque chose échoue entre le lancement et l'impression, l'exception part dans le `catch` et le navigateur n'est jamais fermé. Chaque échec laisse donc un processus Chromium actif sur le serveur, et plusieurs échecs à la suite suffisent à consommer une bonne partie de la mémoire du conteneur.",
          },
          {
            kind: 'p',
            text: "Je ne l'ai pas vu parce que, pendant le développement, la génération fonctionnait : le chemin d'erreur n'était jamais emprunté. La correction tient en quelques lignes, déplacer la fermeture dans un bloc `finally`. À plus long terme, garder un seul navigateur ouvert et réutilisé d'une facture à l'autre éviterait aussi de relancer Chromium à chaque téléchargement.",
          },
          { kind: 'h', text: 'Un service qui a trop grossi' },
          {
            kind: 'p',
            text: "Le découpage par domaine a bien tenu dans l'interface. Dans l'API, un service a débordé : `magento-configurable-product.service.ts` fait 2 492 lignes et mélange la création des produits, des variantes, des images et des prix.",
          },
          { kind: 'h', text: 'Ce que je retiens' },
          {
            kind: 'p',
            text: "Écouter les utilisateurs m'a mené vers le bon outil. Ce qui m'a manqué, c'est un regard extérieur sur le code. Seul sur un projet, on ne voit pas un fichier grossir, parce qu'on sait toujours où tout se trouve. C'est le jour où quelqu'un d'autre reprend le code que ce défaut coûte.",
          },
        ],
      },
      {
        title: 'Ce que je referais autrement',
        blocks: [
          {
            kind: 'list',
            items: [
              "Libérer les ressources coûteuses, navigateur, fichier, connexion, dans un bloc `finally`, et tester le chemin d'erreur autant que le chemin normal.",
              'Découper un service dès qu’il mélange plusieurs responsabilités, sans attendre qu’il dépasse les mille lignes.',
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'app-mobile-photographe',
    title: 'Application mobile de réservation',
    subtitle: 'Application, tableau de bord et API pour un réseau de photographie scolaire',
    summary:
      "Trois applications construites en équipe sur la base unifiée : une application mobile React Native où les clients réservent une séance photo, un tableau de bord Next.js pour les franchisés, et l'API NestJS qui les sert. En recette depuis l'été 2026.",
    apercu:
      "Un particulier, une école, un club sportif ou une entreprise ouvre l'application, choisit une prestation, voit les créneaux disponibles dans son secteur, réserve et paie. De l'autre côté, le franchisé suit ses réservations, ses photographes, ses commandes et sa boutique depuis un tableau de bord. Entre les deux, une API NestJS. Trois dépôts, trois développeurs, et le projet le plus long de mon alternance.",
    periode: 'Février 2026 à aujourd’hui, en recette depuis l’été 2026',
    stack: [
      'React Native 0.81',
      'Expo 54',
      'Expo Router',
      'Next.js 16',
      'React 19',
      'NextAuth',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'TanStack Query',
      'Zustand',
      'Zod',
      'Stripe',
      'Jest',
      'Vitest',
      'Maestro',
      'Playwright',
      'Docker',
      'EAS',
    ],
    competences: ['frontend-react', 'backend-api', 'architecture', 'qualite-devops', 'autonomie', 'travail-equipe'],
    chiffres: [
      { label: 'Dépôts', value: 'Trois : application mobile, tableau de bord, API' },
      { label: 'Équipe', value: 'Trois développeurs, dont le tech lead' },
      { label: 'Ma part dans les commits', value: 'API : 117 sur 262. Mobile : auteur principal des 77. Tableau de bord : 46 sur 89.' },
      { label: 'Profils de clients', value: 'Quatre : particulier, établissement, club sportif, entreprise' },
      { label: 'Écrans de l’application mobile', value: '43' },
      { label: 'Pages du tableau de bord', value: '52, pour trois rôles' },
      { label: 'Contrôleurs de l’API', value: '82' },
      { label: 'Tests unitaires', value: 'Mobile : 162 fichiers, 1 150 cas. Tableau de bord : 96 fichiers, 688 cas. API : 139 fichiers, 949 cas.' },
      { label: 'Tests de bout en bout', value: '51 parcours Maestro sur mobile, 59 scénarios Playwright sur le tableau de bord' },
      { label: 'État', value: 'En recette, versions de préproduction distribuées en interne' },
    ],
    sections: [
      {
        title: 'Présentation du projet',
        blocks: [
          {
            kind: 'p',
            text: "Pix'Vert, le réseau de franchises de photographie scolaire dont j'ai décrit la base de données dans une autre réalisation, voulait offrir à ses clients un moyen de réserver une séance photo sans passer par un coup de téléphone, et à ses franchisés un outil pour piloter leur activité. Le projet se compose de trois applications qui partagent la même base PostgreSQL.",
          },
          {
            kind: 'list',
            items: [
              "**L'application mobile**, en React Native avec Expo, pour les clients finaux. On s'y inscrit selon son profil, particulier, établissement scolaire, club sportif ou entreprise, on choisit une prestation, on voit les créneaux disponibles dans son secteur, on réserve, on paie par carte, puis on retrouve ses photos dans une galerie, on commande des tirages et on suit sa livraison. Un chatbot de support, des notifications et un système de parrainage complètent l'ensemble.",
              "**Le tableau de bord**, en Next.js, pour les franchisés et les administrateurs du réseau. Trois rôles y cohabitent : le super administrateur qui gère les franchises, l'administrateur d'une franchise qui suit ses réservations, ses clients, ses commandes, ses photographes et ses véhicules, et le photographe salarié qui consulte son agenda et ses missions. Le paramétrage couvre les prestations, le catalogue, les tarifs, la livraison, les paiements et les licences.",
              "**L'API**, en NestJS, qui sert ces deux applications mais aussi les logiciels .NET du réseau. Son code est organisé par application cliente : ce qui ne sert qu'à l'application mobile vit dans un dossier, ce qui sert à deux clients ou plus remonte dans un noyau commun.",
            ],
          },
          { kind: 'h', text: 'Ce que le projet ne fait pas encore' },
          {
            kind: 'p',
            text: "Aucune des trois applications n'est en production. Elles sont en recette : l'API tourne sur un environnement de préproduction, l'application mobile est distribuée en interne par EAS, et le tableau de bord est protégé par une authentification supplémentaire tant qu'il n'est pas ouvert.",
          },
        ],
      },
      {
        title: 'Objectifs, contexte, enjeux et risques',
        blocks: [
          {
            kind: 'p',
            text: "Le projet a démarré en février 2026 par l'application mobile, avant même que la base unifiée existe. C'est d'ailleurs le besoin de cette application qui a déclenché le travail sur la base. Le tableau de bord est arrivé en avril, une fois l'API posée.",
          },
          { kind: 'h', text: 'Objectifs' },
          {
            kind: 'list',
            items: [
              "Permettre à un client de réserver et de payer une séance seul, depuis son téléphone.",
              "Donner aux franchisés une vue de leur activité qu'ils n'avaient pas, dispersée jusque-là entre plusieurs logiciels.",
              "Construire les trois briques sur le même modèle de données, pour ne pas recréer l'éclatement qu'on venait de résorber.",
            ],
          },
          { kind: 'h', text: 'Enjeux et risques' },
          {
            kind: 'p',
            text: "**Le métier de la réservation est plus compliqué qu'il n'en a l'air.** Une séance dépend du secteur géographique du client, de la politique de lieu de ce secteur, en studio ou sur place, des disponibilités des photographes et des véhicules, de la durée de la prestation et du type de client. Deux réunions de recueil des besoins n'avaient pas suffi à fixer tout ça, et j'y reviens dans les étapes.",
          },
          {
            kind: 'p',
            text: "**L'argent et les données personnelles.** L'application encaisse des paiements et manipule des informations sur des familles et des enfants. Une faille d'authentification ou une erreur de facturation ne serait pas un simple bug.",
          },
          {
            kind: 'p',
            text: "**Trois applications, trois développeurs, un seul modèle.** Chaque fonctionnalité traverse les trois dépôts, souvent le même jour. Il fallait une organisation qui permette à chacun d'avancer sans attendre les autres, et sans casser ce que les autres venaient de livrer.",
          },
        ],
      },
      {
        title: "Les étapes, ce que j'ai fait",
        blocks: [
          { kind: 'h', text: "Poser l'application mobile et la faire tenir" },
          {
            kind: 'p',
            text: "J'ai créé le projet Expo en février 2026, puis les composants d'interface et les jetons de charte en mars. En avril, après avoir livré l'inscription des particuliers, j'ai réorganisé toute l'application : une première structure par fonctionnalité a laissé place à une structure par couche, écrans, composants, hooks par domaine, dépôt d'accès à l'API, schémas de validation, stores. Chaque réponse de l'API est validée par un schéma Zod avant d'entrer dans l'application. C'est cette structure qui a tenu jusqu'à aujourd'hui, à 43 écrans.",
          },
          { kind: 'h', text: "L'authentification, des deux côtés" },
          {
            kind: 'p',
            text: "Sur l'API, j'ai écrit le module d'authentification : jetons JWT avec rafraîchissement et révocation, mots de passe soumis à une politique de robustesse, réinitialisation en une seule opération, limitation du nombre de tentatives. Pour la connexion par Google et Apple, l'API vérifie elle-même le jeton auprès du fournisseur au lieu de faire confiance à ce que l'application envoie. Côté mobile, j'ai branché ces deux connexions, le stockage sécurisé des jetons et l'inscription pour les quatre profils, avec validation par un administrateur pour les profils professionnels.",
          },
          { kind: 'h', text: 'Cadrer la réservation avant de la coder' },
          {
            kind: 'p',
            text: "Au moment d'attaquer la réservation, je me suis aperçu que les besoins recueillis ne suffisaient pas : durée minimale d'une prestation, temps de battement entre deux séances, créneaux possibles selon le profil, rien de tout ça n'était fixé. Plutôt que d'avancer sur des hypothèses, j'ai rédigé un questionnaire ciblé, transmis au client par la collègue qui porte la relation. Les réponses ont fixé les règles que l'API applique aujourd'hui.",
          },
          { kind: 'h', text: 'Le parcours de réservation' },
          {
            kind: 'p',
            text: "C'est la fonctionnalité qui a demandé le plus de travail, dans les trois dépôts. Côté API : calcul des disponibilités à partir des plannings des photographes et des véhicules, créneaux sur un ou plusieurs jours, politique de lieu par secteur, prévisualisation du prix, paiement par Stripe. Côté mobile : le parcours écran par écran, du choix de la prestation à la confirmation. Et un cas que le métier n'avait pas prévu : quand aucun photographe n'est disponible dans le secteur, l'application n'affiche pas un simple message vide, elle enregistre une demande avec sa raison, pour que le franchisé sache qu'il a manqué une vente.",
          },
          { kind: 'h', text: 'Le tableau de bord' },
          {
            kind: 'p',
            text: "Sur le tableau de bord, j'ai construit la page des prestations d'une franchise, le calendrier des réservations, le catalogue de la boutique et les commandes, le suivi des livraisons avec ses jalons, les grilles de tarifs, le parcours d'intégration d'une nouvelle franchise avec l'affectation de ses secteurs, et le paramétrage des ressources. La garde d'accès par rôle est appliquée côté serveur, dans le middleware Next.js, et pas seulement dans les menus.",
          },
          { kind: 'h', text: 'Les livraisons, le support, les notifications' },
          {
            kind: 'p',
            text: "J'ai intégré le transporteur Mondial Relay pour l'expédition des tirages, d'abord avec sa première API, puis migré vers la seconde. J'ai écrit le système de notifications, côté API, mobile et tableau de bord, et le chatbot de support, alimenté par une FAQ que les administrateurs gèrent eux-mêmes depuis le tableau de bord.",
          },
          { kind: 'h', text: 'Les tests' },
          {
            kind: 'p',
            text: "Chaque dépôt a ses tests unitaires, et les deux interfaces ont des tests de bout en bout : 51 parcours Maestro qui pilotent l'application mobile sur un vrai simulateur, inscription, connexion, réservation, commande, et 59 scénarios Playwright qui vérifient le tableau de bord rôle par rôle, y compris qu'un employé ne peut pas atteindre une page d'administrateur.",
          },
        ],
      },
      {
        title: 'Les acteurs et les interactions',
        blocks: [
          {
            kind: 'p',
            text: "**Le tech lead et un autre développeur** forment l'équipe avec moi. Le travail est réparti par tickets, chaque fonctionnalité passe par une branche et une demande de fusion, et nous relisons le code des autres. C'est la première fois que je travaille avec une revue de code systématique, et ça se voit dans les commits : les corrections demandées sont dans l'historique.",
          },
          {
            kind: 'p',
            text: "**La collègue chargée de la relation client** fait le lien avec Pix'Vert. C'est par elle que passent mes questions de cadrage et que reviennent les réponses.",
          },
          {
            kind: 'p',
            text: "**Pix'Vert** valide la recette et tranche les questions métier, comme les règles de réservation.",
          },
          {
            kind: 'p',
            text: "**Les logiciels .NET du réseau** sont un acteur silencieux mais présent : l'API doit continuer à les servir, et certains identifiants sont générés pour rester compatibles avec leurs compteurs.",
          },
        ],
      },
      {
        title: 'Les résultats',
        blocks: [
          { kind: 'h', text: "Pour l'entreprise" },
          {
            kind: 'p',
            text: "Pix'Vert dispose de trois applications en recette qui couvrent le parcours complet, de la réservation à la livraison des tirages, et d'un tableau de bord qui donne aux franchisés une vue qu'ils n'avaient pas. Les demandes non satisfaites sont enregistrées au lieu d'être perdues. Les versions de préproduction sont distribuées en interne pour les tests.",
          },
          { kind: 'h', text: 'Pour moi' },
          {
            kind: 'p',
            text: "C'est mon premier projet mobile en conditions réelles, et le premier où je tiens les trois côtés d'une fonctionnalité, base, API et interfaces, dans la même semaine. J'y ai appris à écrire des tests de bout en bout, à travailler sous revue de code, et surtout à m'arrêter pour poser des questions quand une spécification ne tient pas, plutôt que de combler les trous moi-même.",
          },
        ],
      },
      {
        title: 'Les lendemains du projet',
        blocks: [
          {
            kind: 'p',
            text: "**Aujourd'hui**, le projet est en recette et les trois dépôts reçoivent encore des commits chaque semaine. Les derniers portent sur le catalogue, les collections de la boutique et le calendrier des réservations.",
          },
          {
            kind: 'p',
            text: "**Dans l'immédiat**, la fin de la recette conditionne la publication de l'application sur les magasins et l'ouverture du tableau de bord aux franchisés. Les mises à jour de l'application pourront ensuite être poussées sans repasser par les magasins, avec des paquets signés.",
          },
          {
            kind: 'p',
            text: "**Plus loin**, l'API a été pensée pour servir aussi les logiciels .NET du réseau, ce qui ouvre la voie à leur bascule progressive sur la base unifiée.",
          },
        ],
      },
      {
        title: 'Mon regard critique',
        blocks: [
          { kind: 'h', text: 'Un parcours de réservation devenu difficile à lire' },
          {
            kind: 'p',
            text: "Le dossier des hooks de réservation de l'application mobile compte trente-trois fichiers, et le hook qui orchestre le parcours en fait plus de quatre cents lignes, au point qu'il a fallu en sortir les types et les réexports dans des fichiers séparés. Chaque règle métier ajoutée, politique de lieu, créneaux multi-jours, demande non satisfaite, s'est empilée sur la précédente. Le code marche et il est testé, mais quelqu'un qui arrive dessus met du temps à comprendre dans quel ordre les choses se décident. Un découpage en étapes explicites, avec un état de parcours unique, aurait été plus sain.",
          },
          { kind: 'h', text: 'Un historique avec des doublons' },
          {
            kind: 'p',
            text: "Sur le dépôt mobile, plusieurs commits apparaissent deux fois, avec le même message et à quelques minutes d'écart. Ce sont des traces de rebases mal terminés. Rien de grave, mais un historique qu'on ne peut pas lire sans se demander lequel des deux est le bon.",
          },
          { kind: 'h', text: 'Ce que je retiens' },
          {
            kind: 'p',
            text: "Sur ce projet, ce qui a le mieux marché n'est pas une technique : c'est le questionnaire de cadrage. Le jour où j'ai arrêté de coder pour poser des questions, le périmètre de la fonctionnalité centrale s'est enfin stabilisé. J'aurais dû le faire dès la première réunion.",
          },
        ],
      },
      {
        title: 'Ce que je referais autrement',
        blocks: [
          {
            kind: 'list',
            items: [
              "Poser les questions de cadrage dès les premières réunions, avec une liste préparée, plutôt qu'en découvrant les trous en codant.",
              "Découper un hook d'orchestration dès qu'il dépasse une centaine de lignes, en étapes nommées.",
              'Remplacer les README générés dès la première semaine.',
              'Vérifier son historique avant de pousser après un rebase.',
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'unification-bdd',
    title: 'Unification de bases de données',
    subtitle: 'Une base PostgreSQL unique pour un réseau de franchises',
    summary:
      "Analyse d'un système hérité, deux bases MySQL, plusieurs API PHP et des logiciels .NET, puis conception en duo d'une base PostgreSQL unique. Elle sert de socle à une nouvelle API, à un tableau de bord et à une application mobile.",
    apercu:
      "Les données d'un réseau de franchises de photographie scolaire étaient réparties entre plusieurs bases et plusieurs couches de code. Avec le tech lead, nous avons fait l'inventaire complet de l'existant, puis conçu une base PostgreSQL unifiée, aujourd'hui en recette avec la nouvelle API, le tableau de bord et l'application mobile.",
    periode: "Analyse bouclée début mars 2026, schéma mis en code les 7 et 8 avril 2026",
    stack: ['PostgreSQL 16', 'TypeORM', 'NestJS', 'MySQL', 'PHP', 'WordPress', 'SOAP', '.NET'],
    competences: ['donnees-sql', 'architecture', 'travail-equipe'],
    chiffres: [
      { label: 'Bases de départ', value: 'Deux bases MySQL de production, plus une base de test' },
      { label: 'Couches de code analysées', value: 'Une API PHP et sa seconde version, deux webservices planning dont un SOAP, un webservice central à une trentaine d’actions, trois logiciels .NET' },
      { label: 'Document d’analyse', value: 'Version 2.0 au 8 mars 2026' },
      { label: 'Schéma initial', value: '64 entités TypeORM et 16 migrations, commitées les 7 et 8 avril 2026' },
      { label: 'Tables rattachées à la franchise', value: '31 sur 64' },
      { label: 'Tables conservant l’ancien identifiant', value: '16 sur 64' },
      { label: 'Dépôt de l’API en septembre 2026', value: '118 entités, 142 migrations, 262 commits, 6 contributeurs' },
      { label: 'État', value: 'En recette avec l’API, le tableau de bord et l’application mobile' },
    ],
    sections: [
      {
        title: 'Présentation du projet',
        blocks: [
          {
            kind: 'p',
            text: "Pix'Vert est un réseau de franchises de photographie scolaire. Chaque franchisé organise les prises de vue dans les écoles de son secteur, et pour chaque école une boutique en ligne est ouverte pour commander les photos. Derrière, il faut gérer les écoles, les classes, les élèves, les périodes de prise de vue, les thèmes et les fonds, les produits, le planning des photographes et le suivi des commandes.",
          },
          {
            kind: 'p',
            text: "Au fil des années, le système qui porte tout ça s'est construit par couches successives :",
          },
          {
            kind: 'list',
            items: [
              "**deux bases MySQL** en production, l'une adossée à WordPress pour l'exploitation, l'autre dédiée au planning ;",
              "**une API PHP** et une seconde version partielle de cette API, qui ne recouvrent pas exactement les mêmes routes ;",
              '**des webservices planning**, dont un en SOAP ;',
              "**un webservice central** appelé par une trentaine d'actions différentes ;",
              "**trois logiciels .NET** qui s'appuient presque tous sur ce webservice, avec en plus des envois de fichiers par FTP.",
            ],
          },
          {
            kind: 'p',
            text: "Le projet a consisté, à deux avec le tech lead, à comprendre cet ensemble puis à concevoir une base PostgreSQL unique pour le remplacer. C'est sur elle que reposent désormais trois briques nouvelles : une API NestJS, un tableau de bord et une application mobile.",
          },
        ],
      },
      {
        title: 'Objectifs, contexte, enjeux et risques',
        blocks: [
          { kind: 'h', text: 'Deux raisons d’unifier' },
          {
            kind: 'p',
            text: "La première était l'application mobile. Pour la construire, il fallait une source de données claire, et pas un assemblage de deux bases MySQL dont une partie des règles n'existait que dans le code PHP.",
          },
          {
            kind: 'p',
            text: "La seconde touchait directement les franchisés. Chacun avait sa base, utilisée par les logiciels .NET, et à chaque évolution de ces logiciels, c'était à lui de modifier la structure de sa base à la main. Une opération répétée dans tout le réseau, par des personnes dont ce n'est pas le métier, avec à chaque fois un risque d'erreur. Un schéma unique supprime cette étape.",
          },
          { kind: 'h', text: 'Les risques' },
          {
            kind: 'p',
            text: "**Casser ce qui tourne.** Les logiciels .NET restent en service pendant toute la transition. Toute table déplacée ou renommée sans tenir compte de leurs appels pouvait bloquer le travail d'un franchisé.",
          },
          {
            kind: 'p',
            text: "**Concevoir à partir d'une vision incomplète.** Les exports de base à notre disposition ne contenaient pas toutes les tables. Certaines n'existaient, de notre point de vue, qu'à travers les requêtes du code qui les utilisait.",
          },
          {
            kind: 'p',
            text: "**Manipuler des données sensibles.** Les bases contiennent des informations sur des élèves, donc sur des mineurs, et des commandes passées par leurs familles.",
          },
        ],
      },
      {
        title: "Les étapes, ce que j'ai fait",
        blocks: [
          {
            kind: 'p',
            text: "Tout le travail s'est fait à deux, avec le tech lead, en deux grandes phases : l'analyse de l'existant, puis la conception de la nouvelle base.",
          },
          { kind: 'h', text: 'Faire l’inventaire, route par route' },
          {
            kind: 'p',
            text: "Nous avons repris l'API PHP point par point. Pour chaque route : la méthode, les paramètres, la base interrogée, les tables lues ou écrites, le format de réponse. Nous avons fait la même chose côté logiciels .NET pour savoir qui appelait quoi. C'est comme ça qu'est apparu le constat le plus important pour la suite : les logiciels n'utilisent presque pas l'API REST, et passent pour tout le reste par un webservice unique aux trente actions.",
          },
          {
            kind: 'p',
            text: "Pour analyser les données et le volume de code, nous nous sommes aidés d'une IA. Elle faisait gagner du temps sur la lecture, mais chaque conclusion devait être vérifiée dans le code. Le document d'analyse garde d'ailleurs la trace de cette prudence : ce qui est déduit est marqué comme tel, avec « à confirmer » ou « à valider en production ».",
          },
          { kind: 'h', text: 'Retrouver les tables que personne n’avait exportées' },
          {
            kind: 'p',
            text: "Plusieurs tables utilisées par le code, notamment celles du planning prévisionnel, des franchises et du rattachement des communes aux secteurs, n'apparaissaient dans aucun export. Nous avons remonté le fil pour chacune : le script PHP qui l'utilise, puis le fichier de configuration qu'il charge, puis la base à laquelle il se connecte. Leur structure a ensuite été reconstituée à partir des requêtes SQL elles-mêmes, colonne par colonne.",
          },
          { kind: 'h', text: 'Repérer ce qui ne tenait plus' },
          {
            kind: 'p',
            text: "L'inventaire a fait remonter du code incohérent. La route des commandes pointait vers une base de test et appelait des fonctions qui n'existaient pas. La suppression d'un rattachement de commune appelait une fonction jamais écrite. Le webservice SOAP écrasait sa propre réponse. Et la plupart des erreurs étaient renvoyées avec un statut HTTP 200, le vrai résultat se cachant dans un code interne. Chacun de ces points devait être tranché avant d'être reproduit dans la nouvelle API.",
          },
          { kind: 'h', text: 'Classer avant de concevoir' },
          {
            kind: 'p',
            text: "Plutôt que de tout réécrire d'un bloc, nous avons rangé chaque partie de l'existant dans l'une de trois catégories. **À répliquer** : ce qui fait un travail clair, comme les écoles, les boutiques, les produits ou les thèmes. **À adapter** : ce qui doit changer de cible, comme le planning, dont l'ancienne table devait être remplacée par une table du nouveau schéma. **À clarifier** : ce qui demandait une décision métier avant la moindre ligne de code, comme la route des commandes ou la stratégie de transition des logiciels .NET.",
          },
          { kind: 'h', text: 'Concevoir la base unifiée' },
          {
            kind: 'p',
            text: "C'est sur cette base de connaissance que nous avons conçu, toujours en duo, le nouveau schéma PostgreSQL. Quelques choix structurent tout le reste.",
          },
          {
            kind: 'list',
            items: [
              "**La franchise comme pivot.** Au lieu d'une base par franchisé, une seule base pour tout le réseau, avec une table `franchises` à laquelle se rattache la moitié des tables par une clé `franchise_id`. C'est ce choix qui supprime les modifications de structure chez chaque franchisé.",
              "**Les anciens identifiants conservés.** Les logiciels .NET reconnaissent les écoles, les boutiques ou les plannings par un identifiant maison, le `pxv_id`. Il est gardé à côté du nouvel identifiant technique sur seize tables, pour que la transition puisse se faire sans casser ces logiciels.",
              "**Des clés là où l'analyse avait trouvé des clés logiques.** Le rattachement des communes aux secteurs n'avait pas de clé primaire dans l'ancienne base, seulement un couple de colonnes utilisé pour les mises à jour. Ce couple devient la clé primaire. Même logique pour le suivi des commandes, dont l'ancienne contrainte d'unicité devient la clé.",
              "**Des types qui disent ce qu'ils contiennent.** Les drapeaux stockés en entiers deviennent des booléens, les dates deviennent des horodatages avec fuseau, et chaque table reçoit ses dates de création et de mise à jour.",
              "**Le planning relié plutôt que décrit.** L'ancienne table du planning prévisionnel stockait le nom de l'école et le nom du photographe en texte libre. La nouvelle table `plannings` pointe vers le photographe, la franchise, le véhicule et la réservation, avec un index unique qui empêche d'enregistrer deux fois le même créneau.",
            ],
          },
          { kind: 'h', text: 'Mettre le schéma en code' },
          {
            kind: 'p',
            text: "Les 7 et 8 avril 2026, j'ai traduit ce schéma dans le dépôt de la nouvelle API NestJS : 64 entités TypeORM, puis 16 migrations versionnées, écrites par vagues qui suivent l'ordre des dépendances entre tables, la franchise d'abord, puis les écoles, les périodes et le planning, puis les produits, les boutiques, les utilisateurs, les réservations et les paiements. Deux migrations supplémentaires, écrites pour ne rien casser si elles sont rejouées, ont uniformisé les noms de tables sur une seule convention. C'est ce jeu de migrations que chaque environnement rejoue pour obtenir la même structure.",
          },
        ],
      },
      {
        title: 'Les acteurs et les interactions',
        blocks: [
          {
            kind: 'p',
            text: "**Le tech lead** et moi avons mené l'ensemble du projet à deux, de l'analyse à la conception. Travailler en binôme sur un sujet pareil a un avantage net : chaque hypothèse sur une table ou une règle était discutée avant d'entrer dans le schéma, et les erreurs de lecture d'un côté étaient souvent rattrapées de l'autre.",
          },
          {
            kind: 'p',
            text: "**Les franchisés** ne participaient pas directement au projet, mais ce sont eux qui en portent l'enjeu : ce sont leurs bases qu'il fallait jusqu'ici modifier à chaque évolution des logiciels.",
          },
          {
            kind: 'p',
            text: "**Pix'Vert**, le client, fournissait les exports de base et reste celui qui valide la recette.",
          },
          {
            kind: 'p',
            text: "**L'équipe de développement** qui construit la nouvelle API, le tableau de bord et l'application mobile est la première utilisatrice du schéma. C'est en recette, avec ces trois briques, qu'il est aujourd'hui mis à l'épreuve.",
          },
        ],
      },
      {
        title: 'Les résultats',
        blocks: [
          { kind: 'h', text: "Pour l'entreprise" },
          {
            kind: 'p',
            text: "Pix'Vert dispose d'une base PostgreSQL unique, qui remplace deux bases MySQL et les règles dispersées dans plusieurs couches de code. Elle est aujourd'hui en recette avec la nouvelle API, le tableau de bord et l'application mobile.",
          },
          {
            kind: 'p',
            text: "Le client dispose aussi d'une cartographie complète de son ancien système : chaque route, chaque table, la base où elle se trouve, le code incohérent et les décisions à prendre. Ce document sert de référence à toute la migration.",
          },
          { kind: 'h', text: 'Pour moi' },
          {
            kind: 'p',
            text: "C'est la première fois que j'ai eu à comprendre un système que personne ne pouvait m'expliquer en entier. J'ai appris à lire du code hérité comme une source d'information sur les données, et pas seulement comme du code. J'ai aussi appris à distinguer, dans un document, ce qui est vérifié de ce qui est déduit. Et concevoir un schéma avec quelqu'un de plus expérimenté m'a fait voir comment il arbitre : ce qu'on garde tel quel, ce qu'on normalise, ce qu'on laisse de côté.",
          },
        ],
      },
      {
        title: 'Les lendemains du projet',
        blocks: [
          {
            kind: 'p',
            text: "**Aujourd'hui**, la base est en phase de recette avec les trois nouvelles briques. C'est l'étape où le schéma se confronte à de vrais usages, et où l'on découvre ce que l'analyse n'avait pas prévu. Le schéma a d'ailleurs continué de vivre : des 64 entités d'avril, le dépôt est passé à 118 entités et 142 migrations en septembre 2026, au fil des fonctionnalités ajoutées par une équipe de six contributeurs. Les fondations ont tenu, tout s'est fait par ajout.",
          },
          {
            kind: 'p',
            text: "**Dans l'immédiat**, la mise en production dépend de cette recette. Il reste aussi à organiser la transition des logiciels .NET : garder l'ancien webservice en parallèle pendant un temps, ou basculer chaque action vers une route de la nouvelle API.",
          },
          {
            kind: 'p',
            text: "**À plus long terme**, une fois le réseau passé sur le schéma unique, les franchisés n'auront plus à toucher à la structure de leur base quand les logiciels évoluent. C'est le bénéfice qui se verra le moins, et celui qui comptera le plus pour eux.",
          },
        ],
      },
      {
        title: 'Mon regard critique',
        blocks: [
          { kind: 'h', text: 'Une conception en partie fondée sur des déductions' },
          {
            kind: 'p',
            text: "Une partie des tables n'était connue qu'à travers le code qui les utilisait. Reconstituer une structure à partir de requêtes SQL, c'est voir les colonnes qu'on lit et qu'on écrit, pas celles qui dorment à côté, ni les types exacts, ni les contraintes. Le document le signale honnêtement, mais une vérification directe sur les bases de production aurait levé le doute plus tôt. Sur un prochain projet de ce type, je demanderais cet accès en lecture avant de commencer l'analyse, pas pendant.",
          },
          { kind: 'h', text: 'L’IA, un accélérateur à surveiller' },
          {
            kind: 'p',
            text: "L'IA nous a fait gagner beaucoup de temps sur la lecture d'un code volumineux et hétérogène. Mais elle formule ses déductions avec la même assurance que ses constats. Sur un travail où une erreur finit dans un schéma de base, la règle que nous avons suivie me paraît la bonne : rien n'entre dans le document sans avoir été vérifié dans le code, et tout ce qui est déduit est écrit comme une déduction.",
          },
          { kind: 'h', text: 'Une convention de nommage fixée après coup' },
          {
            kind: 'p',
            text: "Les 64 entités ont été écrites en un seul commit, et le lendemain il a fallu deux migrations pour renommer les tables : d'abord vers une écriture en minuscules avec des tirets bas, puis au pluriel. La convention n'avait pas été arrêtée avant de commencer. Le coût est resté faible parce que la base n'était pas encore en service, mais sur une base peuplée ces deux renommages auraient été une opération à risque. La règle que j'en tire : fixer l'écriture des noms de tables et de colonnes avant la première entité, pas après la soixante-quatrième.",
          },
          { kind: 'h', text: 'Des décisions qui arrivent tard' },
          {
            kind: 'p',
            text: "Au moment où l'analyse a été bouclée, plusieurs questions restaient ouvertes : le sort de la route des commandes, la stratégie de transition des logiciels .NET, le choix pour le planning. Ce sont des décisions métier autant que techniques, et tant qu'elles ne sont pas prises, la nouvelle API risque de reproduire des comportements qu'on aurait voulu abandonner. J'aurais aimé qu'elles soient tranchées avec le client plus tôt, dès que l'inventaire les a fait apparaître.",
          },
          { kind: 'h', text: 'Ce que je retiens' },
          {
            kind: 'p',
            text: "Avant de concevoir une base, il faut savoir exactement ce qu'on remplace. L'essentiel du travail de ce projet ne se voit pas dans le schéma final : il est dans l'inventaire qui a permis de le dessiner.",
          },
        ],
      },
      {
        title: 'Ce que je referais autrement',
        blocks: [
          {
            kind: 'list',
            items: [
              "Faire valider par le client les points à clarifier au fil de l'inventaire, sans attendre la fin.",
              'Garder, dès le premier jour, une distinction nette entre ce qui est vérifié et ce qui est déduit.',
              "Écrire la correspondance entre anciennes et nouvelles tables en même temps que le nouveau schéma, pour préparer la migration des données.",
            ],
          },
        ],
      },
    ],
  },

  {
    slug: 'crm-immobilier',
    title: 'CRM pour une agence immobilière',
    subtitle: 'Projet collectif à quatre développeurs',
    summary:
      "Outil de gestion de la relation client développé en équipe, dans un contexte de besoins clients mouvants.",
    competences: ['travail-equipe'],
    draft: true,
    sections: [
      {
        title: 'Article à rédiger',
        blocks: [],
      },
    ],
  },
]

export function getRealisationBySlug(slug: string): Realisation | undefined {
  return realisations.find((r) => r.slug === slug)
}

export function realisationsForCompetence(competenceSlug: string): Realisation[] {
  return realisations.filter((r) => r.competences.includes(competenceSlug))
}
