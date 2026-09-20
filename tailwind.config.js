export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--rgb-background) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--rgb-surface) / <alpha-value>)',
          elevated: 'rgb(var(--rgb-surface-elevated) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--rgb-accent) / <alpha-value>)',
          violet: 'rgb(var(--rgb-accent-violet) / <alpha-value>)',
          blue: 'rgb(var(--rgb-accent-blue) / <alpha-value>)',
        },
        content: {
          primary: 'rgb(var(--rgb-content-primary) / <alpha-value>)',
          secondary: 'rgb(var(--rgb-content-secondary) / <alpha-value>)',
          muted: 'rgb(var(--rgb-content-muted) / <alpha-value>)',
        },
        state: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        'on-accent': 'rgb(var(--rgb-on-accent) / <alpha-value>)',
        ink: {
          accent: 'rgb(var(--rgb-accent-ink) / <alpha-value>)',
          violet: 'rgb(var(--rgb-accent-violet-ink) / <alpha-value>)',
          blue: 'rgb(var(--rgb-accent-blue-ink) / <alpha-value>)',
        },
        chart: {
          technique: 'rgb(var(--rgb-chart-technique) / <alpha-value>)',
          humaine: 'rgb(var(--rgb-chart-humaine) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        title: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        display: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        button: '12px',
        card: '16px',
        chip: '8px',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-sm': 'var(--shadow-glow-sm)',
        header: 'var(--shadow-header)',
      },
      transitionDuration: {
        layout: '200ms',
      },
    },
  },
  plugins: [],
}
