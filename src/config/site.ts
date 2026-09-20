export const site = {
  firstName: 'Jérémy',
  lastName: 'Nourri',
  tagline: 'Développeur web',

  avatarSrc: '/avatar.jpeg',
  contact: {
    email: 'jnourri@outlook.fr',
    phone: null as string | null,
    linkedin: null as string | null,
    github: null as string | null,
  },
} as const

export function getFullName(): string {
  return `${site.firstName} ${site.lastName}`
}

export function getInitials(): string {
  const a = site.firstName.trim().charAt(0)
  const b = site.lastName.trim().charAt(0)
  return `${a}${b}`.toUpperCase() || '?'
}
