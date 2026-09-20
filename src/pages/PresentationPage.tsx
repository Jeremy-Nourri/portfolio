import { Prose } from '@/components/content/Prose'
import { Container } from '@/components/ui/Container'
import { site } from '@/config/site'
import { presentation } from '@/data/presentation'
import { accentByIndex, accentStyles } from '@/lib/accents'

export function PresentationPage() {
  return (
    <Container className="py-12 md:py-16">
      <article className="mx-auto max-w-3xl">
        <header className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="relative shrink-0">
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent via-accent-blue to-accent-violet opacity-70 blur-[2px]"
              aria-hidden
            />
            <img
              src={site.avatarSrc}
              alt=""
              className="relative h-24 w-24 rounded-full border-2 border-background object-cover"
            />
          </div>
          <div>
            <h1 className="mb-2">Qui je suis</h1>
            <p className="text-lg text-content-secondary">
              Un parcours en deux temps, le travail social puis le développement, et une
              même façon d&apos;aborder les problèmes.
            </p>
          </div>
        </header>

        {presentation.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="mb-4 flex items-center gap-3">
              <span
                className={`h-6 w-1 rounded-full ${accentStyles[accentByIndex(i)].bar}`}
                aria-hidden
              />
              {section.title}
            </h2>
            <Prose blocks={section.blocks} />
          </section>
        ))}
      </article>
    </Container>
  )
}
