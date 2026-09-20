import { Navigate, useParams } from 'react-router-dom'
import { CrossLinks } from '@/components/content/CrossLinks'
import { Prose } from '@/components/content/Prose'
import { SubNav } from '@/components/content/SubNav'
import { Container } from '@/components/ui/Container'
import { getCompetenceBySlug } from '@/data/competences'
import { getRealisationBySlug, realisations } from '@/data/realisations'
import { accentByIndex, accentForDomaine, accentStyles } from '@/lib/accents'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const realisation = slug ? getRealisationBySlug(slug) : undefined

  if (!realisation) {
    return <Navigate to="/realisations" replace />
  }

  const index = realisations.findIndex((r) => r.slug === realisation.slug)
  const accent = accentStyles[accentByIndex(index)]

  const competencesLiees = realisation.competences
    .map((s) => getCompetenceBySlug(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c))

  return (
    <Container className="py-10 md:py-14">
      <SubNav
        label="Navigation entre les réalisations"
        items={realisations.map((r) => ({
          to: `/realisations/${r.slug}`,
          label: r.title,
        }))}
      />

      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <span className={`mb-4 block h-1 w-16 rounded-full ${accent.bar}`} aria-hidden />
          <h1 className="mb-2">{realisation.title}</h1>
          <p className={`text-lg ${accent.text}`}>{realisation.subtitle}</p>

          {realisation.periode ? (
            <p className="mt-4 text-sm text-content-muted">{realisation.periode}</p>
          ) : null}

          {realisation.apercu ? (
            <p className={`mt-6 rounded-card border border-surface-elevated/80 bg-surface/60 p-4 leading-relaxed text-content-secondary`}>
              {realisation.apercu}
            </p>
          ) : null}

          {realisation.stack ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {realisation.stack.map((tech) => (
                <li
                  key={tech}
                  className={`rounded-chip border px-2.5 py-1 text-xs ${accent.chip}`}
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </header>

        {realisation.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="mb-4 flex items-baseline gap-3">
              <span className={`font-mono text-sm ${accent.text}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {section.title}
            </h2>
            <Prose blocks={section.blocks} />
          </section>
        ))}

        {realisation.chiffres ? (
          <section className="mb-12">
            <h2 className="mb-4">Les chiffres du dépôt</h2>
            <dl className="divide-y divide-surface-elevated/80 overflow-hidden rounded-card border border-surface-elevated/80">
              {realisation.chiffres.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 px-4 py-3 sm:grid-cols-[16rem_1fr] sm:gap-4"
                >
                  <dt className="text-sm font-medium text-content-primary">{row.label}</dt>
                  <dd className="text-sm text-content-secondary">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <CrossLinks
          title="Compétences mobilisées"
          intro="Chaque compétence renvoie à son article détaillé, qui renvoie lui-même aux réalisations qui la démontrent."
          links={competencesLiees.map((c) => ({
            to: `/competences/${c.slug}`,
            title: c.title,
            note: c.teaser,
            accent: accentForDomaine(c.domaine),
          }))}
        />
      </article>
    </Container>
  )
}
