import { ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NotFoundPage() {
  return (
    <Container className="py-24 text-center">
      <p className="mb-2 text-sm font-medium text-accent">404</p>
      <h1 className="mb-4">Page introuvable</h1>
      <p className="mb-8 text-content-secondary">
        La ressource demandée n’existe pas ou a été déplacée.
      </p>
      <ButtonLink to="/">Retour à l’accueil</ButtonLink>
    </Container>
  )
}
