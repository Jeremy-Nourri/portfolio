export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background" />

      <div
        className="ambient-blob ambient-blob-cyan absolute -left-[12%] top-[-38%] h-[92vmin] w-[100vmin] rounded-full blur-[80px]"
        style={{ background: 'var(--ambient-blob-1)' }}
      />
      <div
        className="ambient-blob ambient-blob-violet absolute -right-[8%] top-[5%] h-[82vmin] w-[88vmin] rounded-full blur-[88px]"
        style={{ background: 'var(--ambient-blob-2)' }}
      />
      <div
        className="ambient-blob ambient-blob-cyan2 absolute bottom-[-35%] left-[0%] h-[78vmin] w-[100vmin] rounded-full blur-[75px]"
        style={{ background: 'var(--ambient-blob-3)' }}
      />
      <div
        className="ambient-blob ambient-blob-mid absolute left-1/2 top-[8%] h-[45vmin] w-[80vmin] -translate-x-1/2 rounded-full blur-[70px]"
        style={{ background: 'var(--ambient-blob-mid)' }}
      />

      <div
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background: 'var(--ambient-top-line)',
          boxShadow: 'var(--ambient-top-glow)',
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 mix-blend-soft-light opacity-[0.05] dark:opacity-[0.1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="absolute inset-0"
        style={{ background: 'var(--ambient-vignette)' }}
        aria-hidden
      />
    </div>
  )
}
