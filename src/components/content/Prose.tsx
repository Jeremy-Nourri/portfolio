import type { Block } from '@/data/content'
import { renderInline } from '@/components/content/renderInline'
import { cn } from '@/lib/cn'

function TodoBlock({ text }: { text: string }) {
  return (
    <aside className="my-6 rounded-card border border-state-warning/35 bg-state-warning/5 p-4">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-state-warning">
        À rédiger
      </p>
      <p className="text-sm leading-relaxed text-content-secondary">
        {renderInline(text)}
      </p>
    </aside>
  )
}

export function Prose({
  blocks,
  className,
}: {
  blocks: Block[]
  className?: string
}) {
  return (
    <div className={cn('space-y-4', className)}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'h':
            return (
              <h3 key={i} className="pt-4 text-base font-semibold md:text-lg">
                {block.text}
              </h3>
            )
          case 'p':
            return (
              <p key={i} className="leading-relaxed text-content-secondary">
                {renderInline(block.text)}
              </p>
            )
          case 'list':
            return (
              <ul key={i} className="ml-1 space-y-2">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative pl-5 leading-relaxed text-content-secondary before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            )
          case 'ordered':
            return (
              <ol key={i} className="ml-1 space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-content-secondary">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-elevated text-xs font-semibold text-content-primary">
                      {j + 1}
                    </span>
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-2 border-accent/60 pl-4 italic text-content-secondary"
              >
                {renderInline(block.text)}
              </blockquote>
            )
          case 'facts':
            return (
              <dl
                key={i}
                className="divide-y divide-surface-elevated/80 overflow-hidden rounded-card border border-surface-elevated/80"
              >
                {block.rows.map((row, j) => (
                  <div key={j} className="grid gap-1 px-4 py-3 sm:grid-cols-[14rem_1fr] sm:gap-4">
                    <dt className="text-sm font-medium text-content-primary">{row.label}</dt>
                    <dd className="text-sm text-content-secondary">{renderInline(row.value)}</dd>
                  </div>
                ))}
              </dl>
            )
          case 'todo':
            return <TodoBlock key={i} text={block.text} />
          default:
            return null
        }
      })}
    </div>
  )
}
