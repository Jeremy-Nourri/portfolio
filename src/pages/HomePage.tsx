import { Link } from 'react-router-dom'
import { ButtonLink } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { getFullName, site } from '@/config/site'
import { accroche } from '@/data/presentation'
import { realisations } from '@/data/realisations'
import { accentByIndex, accentStyles } from '@/lib/accents'

const acces = [
  {
    to: '/presentation',
    titre: 'Qui je suis',
    texte:
      "Mon parcours, mes valeurs, ce que je cherche et ce que j'apporte dans une équipe.",
  },
  {
    to: '/competences',
    titre: 'Mes compétences',
    texte:
      'Dix compétences techniques et humaines, comparées entre elles et argumentées une par une.',
  },
  {
    to: '/realisations',
    titre: 'Mes réalisations',
    texte:
      'Cinq projets détaillés, avec leurs résultats et le regard critique que je porte dessus.',
  },
]

export function HomePage() {
  const enAvant = realisations.filter((r) => !r.draft).slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-spotlight" aria-hidden />

      <Container className="py-16 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-accent-blue to-accent-violet opacity-70 blur-[2px]"
              aria-hidden
            />
            <img
              src={site.avatarSrc}
              alt={`Photo de ${getFullName()}`}
              className="relative h-28 w-28 rounded-full border-2 border-background object-cover md:h-36 md:w-36"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-ink-accent">
              {getFullName()}, {site.tagline.toLowerCase()}
            </p>
            <h1 className="mb-4 max-w-3xl">
              <span className="bg-gradient-to-r from-accent via-accent-blue to-accent-violet bg-clip-text text-transparent">
                {accroche.titre}
              </span>
            </h1>
            <p className="max-w-2xl text-base text-content-secondary">
              {accroche.phrase}
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-2xl border-l-2 border-accent/50 pl-4 text-content-secondary">
          {accroche.sousTexte}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink to="/realisations">Voir mes réalisations</ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            Me contacter
          </ButtonLink>
        </div>
      </Container>

      <Container className="pb-16 md:pb-24">
        <ul className="grid gap-6 md:grid-cols-3">
          {acces.map((item, i) => {
            const accent = accentStyles[accentByIndex(i)]
            return (
              <li key={item.to}>
                <Link to={item.to} className="group block h-full rounded-card no-underline">
                  <Card bare className={`h-full overflow-hidden ${accent.ring}`}>
                    <span className={`block h-1 w-full ${accent.bar}`} aria-hidden />
                    <span className="block p-6">
                      <span
                        className={`block text-base font-semibold text-content-primary transition-colors ${accent.textHover}`}
                      >
                        {item.titre}
                      </span>
                      <span className="mt-2 block text-sm text-content-secondary">
                        {item.texte}
                      </span>
                    </span>
                  </Card>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>

      {enAvant.length > 0 ? (
        <Container className="pb-20 md:pb-28">
          <h2 className="mb-6 flex items-center gap-3">
            <span className="h-6 w-1 rounded-full bg-accent-violet" aria-hidden />
            Un projet pour commencer
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {enAvant.map((r) => (
              <li key={r.slug}>
                <Link
                  to={`/realisations/${r.slug}`}
                  className="block h-full rounded-card no-underline"
                >
                  <Card className="h-full">
                    <h3 className="text-base font-semibold text-content-primary">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-accent">{r.subtitle}</p>
                    <p className="mt-3 text-sm text-content-secondary">{r.summary}</p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ) : null}
    </div>
  )
}
