import type { Domaine } from '@/data/competences'

export type AccentName = 'cyan' | 'violet' | 'blue'

export const accentStyles: Record<
  AccentName,
  {
    bar: string
    text: string
    textHover: string
    chip: string
    dot: string
    ring: string
  }
> = {
  cyan: {
    bar: 'bg-accent',
    text: 'text-ink-accent',
    textHover: 'group-hover:text-ink-accent',
    chip: 'border-accent/35 bg-accent/10 text-content-primary',
    dot: 'bg-accent',
    ring: 'group-hover:border-accent/45',
  },
  violet: {
    bar: 'bg-accent-violet',
    text: 'text-ink-violet',
    textHover: 'group-hover:text-ink-violet',
    chip: 'border-accent-violet/35 bg-accent-violet/10 text-content-primary',
    dot: 'bg-accent-violet',
    ring: 'group-hover:border-accent-violet/45',
  },
  blue: {
    bar: 'bg-accent-blue',
    text: 'text-ink-blue',
    textHover: 'group-hover:text-ink-blue',
    chip: 'border-accent-blue/35 bg-accent-blue/10 text-content-primary',
    dot: 'bg-accent-blue',
    ring: 'group-hover:border-accent-blue/45',
  },
}

export function accentForDomaine(domaine: Domaine): AccentName {
  return domaine === 'technique' ? 'cyan' : 'violet'
}

const rotation: AccentName[] = ['cyan', 'violet', 'blue']

export function accentByIndex(index: number): AccentName {
  return rotation[index % rotation.length]
}
