import type { Block } from './content'

export type ParcoursType = 'experience' | 'formation' | 'certification'

export type ParcoursItem = {
  id: string
  type: ParcoursType
  debut: string
  fin: string | null
  periode: string
  titre: string
  lieu: string
  lieuUrl?: string
  logoSrc?: string
  statut?: string
  detail: Block[]
  competences?: string[]
  realisations?: string[]
}

export const parcours: ParcoursItem[] = [
  {
    id: 'grow-your-business',
    type: 'experience',
    debut: '2025-03',
    fin: '2027-03',
    periode: 'Mars 2025 à mars 2027',
    titre: 'Développeur web',
    lieu: 'Grow your business',
    lieuUrl: 'https://grow-your-business.fr/',
    statut: 'Alternance, contrat d’apprentissage',
    competences: [
      'frontend-react',
      'backend-api',
      'donnees-sql',
      'travail-equipe',
      'adaptabilite',
      'empathie',
    ],
    realisations: [
      'back-office-custom',
      'app-mobile-photographe',
      'unification-bdd',
      'crm-immobilier',
    ],
    detail: [
      { kind: 'h', text: 'Mes missions' },
      {
        kind: 'p',
        text: "**Promulias**, plateforme e-commerce. Développement et maintenance du back office Magento : correction de dysfonctionnements récurrents, mises à jour de modules, nouvelles fonctionnalités. Puis conception d'une interface de back office sur mesure en React, connectée à l'API Magento, à partir des besoins recueillis auprès des équipes qui l'utilisent au quotidien.",
      },
      {
        kind: 'p',
        text: "**Pix'Vert**, réseau de franchises de photographie scolaire. Intervention sur les briques applicatives du client, en dehors de son site vitrine : API NestJS, tableau de bord Next.js, application mobile de réservation, et, en duo avec le tech lead, analyse des anciennes bases MySQL et conception d'une base PostgreSQL unifiée qui sert de socle à ces briques.",
      },
      {
        kind: 'p',
        text: "**My Chez Moi**, agence immobilière. Développement d'un CRM au sein d'une équipe de quatre développeurs.",
      },
      { kind: 'h', text: 'Mon positionnement dans l’entreprise' },
      {
        kind: 'p',
        text: "Deux configurations de travail très différentes, et c'est ce qui rend cette alternance formatrice. Sur la plateforme e-commerce, je suis seul et en autonomie complète : je recueille les besoins, j'arbitre, je livre. Sur les projets du studio photo, je travaille avec deux autres développeurs dont un tech lead, ce qui m'expose à la revue de code et aux décisions d'architecture prises à plusieurs.",
      },
      { kind: 'h', text: 'Ma vision de l’entreprise' },
      {
        kind: 'p',
        text: "Ce que cette alternance m'apporte et que la formation ne donne pas, c'est la relation client : recueillir un besoin correctement, comprendre le contexte métier avant de proposer une solution technique, et suivre un processus de développement qui ne s'arrête pas au code livré. J'y ai découvert qu'une grande partie du travail d'un développeur se joue avant la première ligne de code.",
      },
    ],
  },

  {
    id: 'iscod',
    type: 'formation',
    debut: '2025-03',
    fin: '2027-03',
    periode: 'Mars 2025 à mars 2027',
    titre: 'Expert en ingénierie logicielle, niveau 7',
    lieu: 'iSCOD, VISIPLUS academy',
    lieuUrl: 'https://www.iscod.fr/',
    statut: 'En cours',
    detail: [
      {
        kind: 'p',
        text: "La pédagogie de l'iSCOD repose sur l'alternance entre des modules à distance et l'entreprise, avec une exigence qu'on sous-estime au départ : c'est à l'apprenant d'organiser son temps et de faire le lien entre les deux. Ce format m'oblige à rapporter chaque notion vue en cours à une situation réelle rencontrée la semaine précédente, ce qui la fixe bien plus durablement qu'un exercice hors contexte.",
      },
      {
        kind: 'p',
        text: "Sa contrepartie est l'autonomie qu'elle suppose : sans le rythme d'une promotion en présentiel, la régularité ne tient qu'à soi. C'est un mode d'apprentissage qui convient à quelqu'un qui sait déjà travailler seul, et c'est précisément ce que onze années de terrain m'avaient appris à faire.",
      },
    ],
  },

  {
    id: 'cda',
    type: 'formation',
    debut: '2023-10',
    fin: '2024-12',
    periode: 'Octobre 2023 à décembre 2024',
    titre: 'Concepteur développeur d’applications, niveau 6',
    lieu: 'M2i Formation',
    lieuUrl: 'https://www.m2iformation.fr/',
    statut: 'Titre obtenu',
    realisations: ['project-flow'],
    detail: [
      {
        kind: 'p',
        text: "Formation qui a donné lieu au projet **Project Flow**, application de gestion de projets collaboratifs développée seule en quarante-six jours et présentée en soutenance.",
      },
    ],
  },

  {
    id: 'oclock',
    type: 'formation',
    debut: '2022-11',
    fin: '2023-04',
    periode: 'Novembre 2022 à avril 2023',
    titre: 'Développeur web full stack JavaScript',
    lieu: 'École O’Clock',
    lieuUrl: 'https://oclock.io/',
    statut: 'Titre obtenu',
    detail: [
      {
        kind: 'p',
        text: "Première formation au développement, en téléprésentiel. Point de bascule entre le travail social et l'ingénierie logicielle.",
      },
    ],
  },

  {
    id: 'dees',
    type: 'formation',
    debut: '2010-09',
    fin: null,
    periode: 'Dates à préciser, avant 2011',
    titre: 'Diplôme d’État d’éducateur spécialisé',
    lieu: 'IRTS',
    statut: 'Diplôme obtenu',
    detail: [
      {
        kind: 'p',
        text: "Formation en travail social préparant à l'accompagnement éducatif de publics en difficulté, alternant enseignements théoriques et stages de terrain.",
      },
    ],
  },

  {
    id: 'audasse',
    type: 'experience',
    debut: '2011-01',
    fin: '2022-11',
    periode: 'Janvier 2011 à novembre 2022',
    titre: 'Éducateur spécialisé en centre d’accueil pour demandeurs d’asile',
    lieu: 'Association Audasse',
    statut: 'Salarié',
    competences: ['empathie', 'adaptabilite', 'autonomie', 'travail-equipe'],
    detail: [
      {
        kind: 'p',
        text: "Onze années dans l'accompagnement social. C'est là que se sont construites les compétences humaines sur lesquelles je m'appuie aujourd'hui : l'écoute avant l'action, le travail dans des situations complexes et mouvantes, et la capacité à décider seul quand personne ne peut décider à votre place.",
      },
      { kind: 'h', text: 'Mes missions' },
      {
        kind: 'p',
        text: "Éducateur spécialisé en centre d'accueil pour demandeurs d'asile. J'accompagnais des personnes et des familles en demande de protection internationale, de leur arrivée dans la structure jusqu'à la décision sur leur dossier.",
      },
      {
        kind: 'list',
        items: [
          "Accompagnement de la procédure de demande d'asile : constitution du dossier, préparation à l'entretien, suivi du recours en cas de rejet.",
          "Accès aux droits : santé, scolarisation des enfants, ouverture des prestations, orientation vers les partenaires du territoire.",
          "Accompagnement dans la vie quotidienne du centre et dans le logement, avec les questions de cohabitation que cela suppose.",
          "Travail avec des interprètes et médiation entre des cultures, des langues et des cadres administratifs qui ne se recouvrent pas.",
          "Préparation à la sortie du dispositif, que la décision soit favorable ou non.",
          "Travail en équipe pluridisciplinaire, avec des travailleurs sociaux, des juristes et des personnels administratifs.",
        ],
      },
      { kind: 'h', text: 'Ce que j’en garde' },
      {
        kind: 'p',
        text: "Un métier où l'on n'a jamais toutes les informations, où la personne en face n'exprime pas toujours son besoin réel, et où il faut décider quand même. C'est exactement la posture que je retrouve face à un client dont la demande est floue, et c'est ce qui rend cette expérience utile au développement plutôt qu'étrangère à lui.",
      },
    ],
  },

  {
    id: 'air-ressourcerie',
    type: 'experience',
    debut: '2010-01',
    fin: '2011-01',
    periode: 'Janvier 2010 à janvier 2011',
    titre: 'Animateur en éducation à l’environnement et au développement durable',
    lieu: 'Association AIR Ressourcerie',
    statut: 'Salarié',
    competences: ['empathie', 'adaptabilite'],
    detail: [],
  },
]

export function parcoursAntiChrono(): ParcoursItem[] {
  return [...parcours].sort((a, b) => b.debut.localeCompare(a.debut))
}

export const experiences = () =>
  parcoursAntiChrono().filter((i) => i.type === 'experience')

export const formations = () =>
  parcoursAntiChrono().filter((i) => i.type === 'formation')

export const certifications = () =>
  parcoursAntiChrono().filter((i) => i.type === 'certification')

export function initialesLieu(lieu: string): string {
  return lieu
    .replace(/[^\p{L}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((mot) => mot.charAt(0).toUpperCase())
    .join('')
}
