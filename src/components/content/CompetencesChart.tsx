import { Link } from 'react-router-dom'
import { competences, type Competence } from '@/data/competences'

const MAX = 10

function Bar({ competence }: { competence: Competence }) {
  const pct = ((competence.level ?? 0) / MAX) * 100

  return (
    <li className="grid grid-cols-[1fr] items-center gap-x-4 gap-y-1 py-2 sm:grid-cols-[13rem_1fr_9rem]">
      <Link
        to={`/competences/${competence.slug}`}
        className="text-sm font-medium text-content-primary no-underline hover:text-ink-accent"
      >
        {competence.shortTitle}
      </Link>

      <div className="h-2.5 w-full rounded-full bg-surface-elevated/70">
        <div
          className="h-full rounded-full bg-chart-technique"
          style={{ width: `${pct}%` }}
          role="img"
          aria-label={`${competence.shortTitle} : ${competence.niveau}`}
        />
      </div>

      <span className="text-sm text-content-secondary sm:text-right">
        {competence.niveau}
      </span>
    </li>
  )
}

function Tag({ competence }: { competence: Competence }) {
  return (
    <li>
      <Link
        to={`/competences/${competence.slug}`}
        className="inline-flex items-center gap-2 rounded-chip border border-chart-humaine/35 bg-chart-humaine/10 px-3 py-1.5 text-sm text-content-primary no-underline transition-colors duration-layout hover:border-chart-humaine/60 hover:bg-chart-humaine/20"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-chart-humaine" aria-hidden />
        {competence.title}
      </Link>
    </li>
  )
}

export function CompetencesChart() {
  const techniques = competences.filter((c) => c.domaine === 'technique')
  const humaines = competences.filter((c) => c.domaine === 'humaine')

  return (
    <figure className="rounded-card border border-surface-elevated/80 bg-surface/60 p-5 md:p-7">
      <figcaption className="mb-8">
        <h2 className="mb-2 text-lg md:text-xl">Mes dix compétences</h2>
        <p className="max-w-2xl text-sm text-content-secondary">
          Cinq compétences techniques, situées les unes par rapport aux autres sur une
          échelle commune, et cinq compétences humaines. Chaque niveau est auto-évalué et
          argumenté dans l&apos;autocritique de son article.
        </p>
      </figcaption>

      <section className="mb-10">
        <h3 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-content-primary">
          <span className="h-2.5 w-6 rounded-full bg-chart-technique" aria-hidden />
          Compétences techniques
        </h3>
        <ul className="divide-y divide-surface-elevated/50">
          {techniques.map((c) => (
            <Bar key={c.slug} competence={c} />
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-4 flex items-center gap-2.5 text-base font-semibold text-content-primary">
          <span className="h-2.5 w-6 rounded-full bg-chart-humaine" aria-hidden />
          Compétences humaines
        </h3>
        <ul className="flex flex-wrap gap-2">
          {humaines.map((c) => (
            <Tag key={c.slug} competence={c} />
          ))}
        </ul>
      </section>

      <details className="mt-8 border-t border-surface-elevated/70 pt-4">
        <summary className="cursor-pointer text-sm text-content-secondary">
          Voir les données sous forme de tableau
        </summary>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="text-content-muted">
              <th scope="col" className="py-2 pr-4 font-medium">
                Compétence
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Domaine
              </th>
              <th scope="col" className="py-2 font-medium">
                Niveau
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-elevated/50">
            {competences.map((c) => (
              <tr key={c.slug}>
                <th scope="row" className="py-2 pr-4 font-normal text-content-primary">
                  {c.shortTitle}
                </th>
                <td className="py-2 pr-4 text-content-secondary">
                  {c.domaine === 'technique' ? 'Technique' : 'Humaine'}
                </td>
                <td className="py-2 text-content-secondary">
                  {c.niveau ?? 'Non chiffré'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  )
}
