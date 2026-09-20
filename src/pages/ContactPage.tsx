import { site } from '@/config/site'
import { Container } from '@/components/ui/Container'

export function ContactPage() {
  const { contact } = site

  return (
    <Container className="py-12 md:py-16">
      <h1 className="mb-6">Contact</h1>
      <p className="mb-10 max-w-2xl text-content-secondary">
        Pour échanger sur une opportunité ou un projet, vous pouvez me joindre via les
        coordonnées ci-dessous.
      </p>
      <div className="max-w-lg rounded-card border border-surface-elevated bg-surface p-6 md:p-8">
        <h2 className="mb-6 text-base font-semibold text-content-primary">Coordonnées</h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="mb-1 font-medium text-content-secondary">Email</dt>
            <dd>
              <a
                href={`mailto:${contact.email}`}
                className="text-accent underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          {contact.phone ? (
            <div>
              <dt className="mb-1 font-medium text-content-secondary">Téléphone</dt>
              <dd>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {contact.phone}
                </a>
              </dd>
            </div>
          ) : null}
          {contact.linkedin ? (
            <div>
              <dt className="mb-1 font-medium text-content-secondary">LinkedIn</dt>
              <dd>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Profil LinkedIn
                </a>
              </dd>
            </div>
          ) : null}
          {contact.github ? (
            <div>
              <dt className="mb-1 font-medium text-content-secondary">GitHub</dt>
              <dd>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Dépôts et contributions
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </Container>
  )
}
