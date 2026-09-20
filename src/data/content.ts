export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'ordered'; items: string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'facts'; rows: { label: string; value: string }[] }
  | { kind: 'todo'; text: string }

export type Preuve = {
  title: string
  blocks: Block[]
  realisation?: string
  realisationLabel?: string
}
