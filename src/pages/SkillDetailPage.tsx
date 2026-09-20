import { Link, Navigate, useParams } from 'react-router-dom'
import { CrossLinks } from '@/components/content/CrossLinks'
import { Prose } from '@/components/content/Prose'
import { SubNav } from '@/components/content/SubNav'
import { Container } from '@/components/ui/Container'
import { competences, getCompetenceBySlug } from '@/data/competences'
import { getRealisationBySlug } from '@/data/realisations'
import { accentForDomaine, accentStyles } from '@/lib/accents'

export function SkillDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const competence = slug ? getCompetenceBySlug(slug) : undefined

  if (!competence) {
    return <Navigate to="/competences" replace />
  }

  const accent = accentStyles[accentForDomaine(competence.domaine)]

  const realisationsLiees = competence.realisations
    .map((s) => getRealisationBySlug(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r))

  return (
    <Container className="py-10 md:py-14">
      <SubNav
        label="Navigation entre les compétences"
        items={competences.map((c) => ({
          to: `/competences/${c.slug}`,
          label: c.shortTitle,
        }))}
      />

      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className={`mb-2 text-sm font-medium uppercase tracking-wider ${accent.text}`}>
            {competence.domaine === 'technique'
              ? 'Compétence technique'
              : 'Compétence humaine'}
          </p>
          <h1 className="mb-3">{competence.title}</h1>
          <p className="text-lg text-content-secondary">{competence.teaser}</p>
          {competence.niveau ? (
            <p className={`mt-4 inline-flex items-center gap-2 rounded-chip border px-3 py-1 text-sm ${accent.chip}`}>
              Niveau auto-évalué
              <span className="font-medium text-content-primary">
                {competence.niveau}
              </span>
            </p>
          ) : null}
        </header>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center gap-3">
            <span className={`h-6 w-1 rounded-full ${accent.bar}`} aria-hidden />
            Ma définition
          </h2>
          <Prose blocks={competence.definition} />
        </section>

        {competence.preuves.length > 0 ? (
          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3">
              <span className={`h-6 w-1 rounded-full ${accent.bar}`} aria-hidden />
              Mes éléments de preuve
            </h2>
            <div className="space-y-10">
              {competence.preuves.map((preuve, i) => {
                const realisation = preuve.realisation
                  ? getRealisationBySlug(preuve.realisation)
                  : undefined

                return (
                  <div
                    key={i}
                    className={`rounded-card border border-surface-elevated/80 bg-surface/50 p-5 md:p-6`}
                  >
                    <h3 className="mb-4 text-base font-semibold md:text-lg">
                      {preuve.title}
                    </h3>
                    <Prose blocks={preuve.blocks} />
                    {realisation ? (
                      <p className="mt-5 text-sm">
                        <Link to={`/realisations/${realisation.slug}`}>
                          Voir la réalisation : {realisation.title}
                        </Link>
                      </p>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </section>
        ) : null}

        {competence.autocritique.length > 0 ? (
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3">
              <span className={`h-6 w-1 rounded-full ${accent.bar}`} aria-hidden />
              Mon autocritique
            </h2>
            <Prose blocks={competence.autocritique} />
          </section>
        ) : null}

        {competence.evolution.length > 0 ? (
          <section className="mb-12">
            <h2 className="mb-4 flex items-center gap-3">
              <span className={`h-6 w-1 rounded-full ${accent.bar}`} aria-hidden />
              Mon évolution dans cette compétence
            </h2>
            <Prose blocks={competence.evolution} />
          </section>
        ) : null}

        <CrossLinks
          title="Réalisations rattachées à cette compétence"
          intro="Chaque réalisation renvoie à son article détaillé, qui renvoie lui-même aux compétences mobilisées."
          links={realisationsLiees.map((r) => ({
            to: `/realisations/${r.slug}`,
            title: r.title,
            note: r.subtitle,
            accent: 'blue' as const,
          }))}
        />
      </article>
    </Container>
  )
}
