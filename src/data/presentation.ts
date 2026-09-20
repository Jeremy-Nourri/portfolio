import type { Block } from './content'

export type PresentationSection = {
  title: string
  blocks: Block[]
}

export const accroche = {
  titre: 'Du travail social au génie logiciel',
  phrase:
    "Développeur web en alternance, je conçois des applications de bout en bout et je sais dire ce qui, dans mon code, tient bien et ce qui tient mal.",
  sousTexte:
    "Ce portfolio présente mon parcours, mes compétences et cinq réalisations, avec les résultats obtenus et le regard critique que je porte dessus.",
}

export const presentation: PresentationSection[] = [
  {
    title: "L'humain comme point de départ",
    blocks: [
      {
        kind: 'p',
        text: "Le travail social a occupé plusieurs années de mon parcours. Pas par hasard : la conviction que les problèmes de société méritaient qu'on s'y consacre, et l'envie concrète d'être utile. Cette période m'a laissé une façon d'être attentif aux autres, à l'aise dans la complexité, habitué à travailler sans filet.",
      },
      {
        kind: 'p',
        text: "Une autre envie n'avait pourtant jamais disparu, celle du web et du code, découverte au collège grâce à un professeur de technologie et entretenue depuis à travers des projets personnels. L'orientation vers l'ingénierie logicielle est donc un retour à mon projet initial, avec une maturité et des compétences humaines que je n'avais pas à seize ans.",
      },
    ],
  },
  {
    title: 'Mes valeurs',
    blocks: [],
  },
  {
    title: 'Un projet professionnel qui existait déjà',
    blocks: [
      {
        kind: 'p',
        text: "Revenir à l'ingénierie logicielle, c'est renouer avec un premier projet professionnel. Rester curieux, capable de m'adapter à des contextes variés, de monter en compétence là où un projet en a besoin : c'est la posture qui me correspond le mieux à ce stade.",
      },
      {
        kind: 'p',
        text: "Ce qui m'attire, c'est la diversité des problèmes à résoudre plus qu'un domaine technique en particulier. À moyen terme, je veux progresser sur l'architecture logicielle, qui est le domaine où l'écart entre ce que je sais expliquer et ce que j'ai pratiqué reste le plus grand.",
      },
    ],
  },
  {
    title: 'Mes principales qualités humaines',
    blocks: [
      {
        kind: 'p',
        text: "**L'empathie.** Que ce soit en équipe ou face à une interface à concevoir, ma première question est toujours la même : qui est de l'autre côté. Ce réflexe vient de loin et il guide encore ma façon de travailler. Il a produit au moins un projet concret, une interface de back office née des retours répétés d'utilisateurs que personne n'écoutait.",
      },
      {
        kind: 'p',
        text: "**L'envie de résoudre.** Face à un problème, mon réflexe est de chercher, tester, ajuster, recommencer. C'est ce qui m'a permis de reprendre la maintenance d'une plateforme dont je ne connaissais ni l'outil ni le langage.",
      },
      {
        kind: 'p',
        text: "**La lucidité.** J'ai audité mon propre projet de fin de formation dix-neuf mois après l'avoir arrêté, et j'en ai tiré la liste de ses défauts avant qu'un jury ne le fasse. Savoir regarder son travail sans complaisance me semble être la condition pour progresser vraiment.",
      },
    ],
  },
  {
    title: "Mes centres d'intérêt",
    blocks: [
      {
        kind: 'p',
        text: "**Le VTT** occupe une bonne place dans mes loisirs, une façon de déconnecter, de sortir la tête du clavier et de rester actif.",
      },
      {
        kind: 'p',
        text: "**La musique et le cinéma** sont essentiels dans mon quotidien, des univers dans lesquels je me ressource régulièrement.",
      },
      {
        kind: 'p',
        text: "**La géopolitique** m'occupe beaucoup l'esprit : suivre comment le monde évolue, comprendre les rapports de force qui se jouent à l'échelle globale.",
      },
      {
        kind: 'p',
        text: "**L'innovation** me passionne aussi. Rester à l'affût de ce qui émerge, de ce qui va changer nos façons de travailler et aider à résoudre des problèmes.",
      },
    ],
  },
]
