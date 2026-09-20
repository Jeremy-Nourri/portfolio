import { Link } from 'react-router-dom'
import { CompetencesChart } from '@/components/content/CompetencesChart'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { competencesByDomaine } from '@/data/competences'
import { realisationsForCompetence } from '@/data/realisations'
import { accentForDomaine, accentStyles } from '@/lib/accents'

function Groupe({
  titre,
  domaine,
}: {
  titre: string
  domaine: 'technique' | 'humaine'
}) {
  const items = competencesByDomaine(domaine)
  const accent = accentStyles[accentForDomaine(domaine)]

  return (
    <section className="mt-14">
      <h2 className="mb-6 flex items-center gap-3">
        <span className={`h-6 w-1 rounded-full ${accent.bar}`} aria-hidden />
        {titre}
      </h2>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => {
          const liees = realisationsForCompetence(c.slug)
          return (
            <li key={c.slug}>
              <Link
                to={`/competences/${c.slug}`}
                className="group block h-full rounded-card no-underline outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Card bare className={`flex h-full flex-col overflow-hidden ${accent.ring}`}>
                  <span className={`block h-1 w-full ${accent.bar}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={`text-base font-semibold text-content-primary transition-colors ${accent.textHover}`}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-content-secondary">{c.teaser}</p>
                  {c.niveau ? (
                    <span
                      className={`mt-4 inline-flex w-fit rounded-chip border px-2.5 py-1 text-xs ${accent.chip}`}
                    >
                      {c.niveau}
                    </span>
                  ) : null}
                  <p className="mt-3 text-xs text-content-muted">
                    {liees.length > 0
                      ? `${liees.length} réalisation${liees.length > 1 ? 's' : ''} rattachée${liees.length > 1 ? 's' : ''}`
                      : 'Article à rédiger'}
                  </p>
                  </div>
                </Card>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export function SkillsListPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="mb-4">Mes compétences</h1>
      <p className="mb-10 max-w-2xl text-content-secondary">
        Dix compétences, cinq techniques et cinq humaines, situées les unes par rapport
        aux autres. Chaque article détaille ma définition de la compétence, mes éléments
        de preuve, mon autocritique et la façon dont je compte la faire progresser.
      </p>

      <CompetencesChart />

      <Groupe titre="Compétences techniques" domaine="technique" />
      <Groupe titre="Compétences humaines" domaine="humaine" />
    </Container>
  )
}
