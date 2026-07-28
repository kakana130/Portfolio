/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: '#161A21',
        'sidebar-2': '#1E232C',
        'sidebar-line': '#2B313C',
        'sidebar-text': '#8B93A3',
        'sidebar-active': '#F3EFE6',
        paper: '#FAF7F0',
        'paper-2': '#F2ECDE',
        ink: '#1E1B16',
        'ink-soft': '#5B5548',
        amber: '#D98E2E',
        teal: '#3E8E82',
        rust: '#B4472B',
        line: '#DDD5C3',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['"IBM Plex Sans Thai"', '"IBM Plex Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
