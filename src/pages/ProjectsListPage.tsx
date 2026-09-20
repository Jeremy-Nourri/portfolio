import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { getCompetenceBySlug } from '@/data/competences'
import { realisations } from '@/data/realisations'
import { accentByIndex, accentForDomaine, accentStyles } from '@/lib/accents'

export function ProjectsListPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="mb-4">Mes réalisations</h1>
      <p className="mb-10 max-w-2xl text-content-secondary">
        Cinq projets, en contexte professionnel ou personnel. Chaque article en présente
        le contexte, les étapes, les acteurs, les résultats et le regard critique que je
        porte dessus aujourd&apos;hui.
      </p>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realisations.map((r, i) => {
          const accent = accentStyles[accentByIndex(i)]
          return (
            <li key={r.slug}>
              <Link
                to={`/realisations/${r.slug}`}
                className="group block h-full rounded-card no-underline outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Card bare className={`flex h-full flex-col overflow-hidden ${accent.ring}`}>
                  <span className={`block h-1 w-full ${accent.bar}`} aria-hidden />
                  <div className="flex flex-1 flex-col p-6">
                    <h2
                      className={`text-base font-semibold text-content-primary transition-colors ${accent.textHover}`}
                    >
                      {r.title}
                    </h2>
                    <p className={`mt-1 text-sm ${accent.text}`}>{r.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm text-content-secondary">
                      {r.summary}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {r.competences.slice(0, 3).map((slug) => {
                        const c = getCompetenceBySlug(slug)
                        if (!c) return null
                        const chip = accentStyles[accentForDomaine(c.domaine)]
                        return (
                          <li
                            key={slug}
                            className={`rounded-chip border px-2 py-0.5 text-xs ${chip.chip}`}
                          >
                            {c.shortTitle}
                          </li>
                        )
                      })}
                    </ul>

                    {r.draft ? (
                      <p className="mt-3 text-xs text-state-warning">Article à rédiger</p>
                    ) : null}
                  </div>
                </Card>
              </Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
