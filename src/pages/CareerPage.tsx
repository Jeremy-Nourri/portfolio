import { Link } from 'react-router-dom'
import { Prose } from '@/components/content/Prose'
import { Container } from '@/components/ui/Container'
import { getCompetenceBySlug } from '@/data/competences'
import {
  certifications,
  initialesLieu,
  parcoursAntiChrono,
  type ParcoursItem,
} from '@/data/parcours'
import { getRealisationBySlug } from '@/data/realisations'
import { accentForDomaine, accentStyles } from '@/lib/accents'

const styleParType = {
  experience: {
    label: 'Expérience',
    dot: 'bg-accent',
    chip: 'border-accent/35 bg-accent/10',
    text: 'text-ink-accent',
  },
  formation: {
    label: 'Formation',
    dot: 'bg-accent-violet',
    chip: 'border-accent-violet/35 bg-accent-violet/10',
    text: 'text-ink-violet',
  },
  certification: {
    label: 'Certification',
    dot: 'bg-accent-blue',
    chip: 'border-accent-blue/35 bg-accent-blue/10',
    text: 'text-ink-blue',
  },
} as const

function Logo({ item }: { item: ParcoursItem }) {
  const style = styleParType[item.type]

  const contenu = item.logoSrc ? (
    <img
      src={item.logoSrc}
      alt={item.lieu}
      className="h-full w-full rounded-chip object-contain"
    />
  ) : (
    <span
      className={`text-sm font-semibold ${style.text}`}
      aria-hidden
      title={item.lieu}
    >
      {initialesLieu(item.lieu)}
    </span>
  )

  const classe = `flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-chip border bg-surface ${style.chip}`

  if (item.lieuUrl) {
    return (
      <a
        href={item.lieuUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${classe} no-underline`}
        aria-label={`Site de ${item.lieu}, nouvelle fenêtre`}
      >
        {contenu}
      </a>
    )
  }

  return <span className={classe}>{contenu}</span>
}

function Entree({ item }: { item: ParcoursItem }) {
  const style = styleParType[item.type]

  const competencesLiees = (item.competences ?? [])
    .map((s) => getCompetenceBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  const realisationsLiees = (item.realisations ?? [])
    .map((s) => getRealisationBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <li className="relative pl-10 sm:pl-14">
      <span
        className={`absolute left-2 top-6 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-background sm:left-3 ${style.dot}`}
        aria-hidden
      />

      <article className="mb-4 rounded-card border border-surface-elevated/80 bg-surface/60 p-5 md:p-6">
        <div className="flex items-start gap-4">
          <Logo item={item} />

          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-content-muted">{item.periode}</span>
              <span
                className={`rounded-chip border px-2 py-0.5 text-xs ${style.chip} ${style.text}`}
              >
                {style.label}
              </span>
              {item.statut ? (
                <span className="text-xs text-content-muted">{item.statut}</span>
              ) : null}
            </p>

            <h3 className="mt-1 text-base font-semibold text-content-primary md:text-lg">
              {item.titre}
            </h3>

            <p className="mt-0.5 text-sm text-content-secondary">
              {item.lieuUrl ? (
                <a href={item.lieuUrl} target="_blank" rel="noopener noreferrer">
                  {item.lieu}
                </a>
              ) : (
                item.lieu
              )}
            </p>
          </div>
        </div>

        <details className="group mt-4 border-t border-surface-elevated/70 pt-4">
          <summary
            className={`cursor-pointer list-none text-sm font-medium ${style.text}`}
          >
            <span className="group-open:hidden">Voir le détail</span>
            <span className="hidden group-open:inline">Masquer le détail</span>
          </summary>

          <div className="mt-4">
            <Prose blocks={item.detail} />

            {competencesLiees.length > 0 ? (
              <div className="mt-6">
                <p className="mb-2 text-sm font-medium text-content-primary">
                  Compétences mobilisées
                </p>
                <ul className="flex flex-wrap gap-2">
                  {competencesLiees.map((c) => (
                    <li key={c.slug}>
                      <Link
                        to={`/competences/${c.slug}`}
                        className={`inline-flex rounded-chip border px-2.5 py-1 text-xs no-underline ${accentStyles[accentForDomaine(c.domaine)].chip}`}
                      >
                        {c.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {realisationsLiees.length > 0 ? (
              <div className="mt-5">
                <p className="mb-2 text-sm font-medium text-content-primary">
                  Réalisations rattachées
                </p>
                <ul className="flex flex-wrap gap-2">
                  {realisationsLiees.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/realisations/${r.slug}`}
                        className="inline-flex rounded-chip border border-accent-blue/35 bg-accent-blue/10 px-2.5 py-1 text-xs no-underline"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </details>
      </article>
    </li>
  )
}

export function CareerPage() {
  const items = parcoursAntiChrono()
  const certifs = certifications()

  return (
    <Container className="py-12 md:py-16">
      <h1 className="mb-4">Mon parcours</h1>
      <p className="mb-10 max-w-2xl text-content-secondary">
        Du plus récent au plus ancien. Onze années dans le travail social, puis une
        reconversion vers l&apos;ingénierie logicielle. Chaque étape se déplie pour en
        montrer le détail et les compétences qui en sont issues.
      </p>

      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-content-secondary">
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
          Expériences
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-violet" aria-hidden />
          Formations
        </li>
      </ul>

      <div className="relative mt-10">
        <span
          className="absolute left-2 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent-violet to-transparent sm:left-3"
          aria-hidden
        />
        <ol className="space-y-4">
          {items.map((item) => (
            <Entree key={item.id} item={item} />
          ))}
        </ol>
      </div>

      {certifs.length > 0 ? (
        <section className="mt-16">
          <h2 className="mb-6">Tests et certifications</h2>
          <ul className="space-y-2">
            {certifs.map((c) => (
              <li key={c.id} className="text-sm text-content-secondary">
                <span className="text-content-primary">{c.titre}</span>, {c.periode}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </Container>
  )
}
