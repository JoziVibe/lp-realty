import type {Config} from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          teal:        '#003F47',
          'teal-light':'#005A66',
          'teal-dark': '#002830',
          'teal-mist': '#E8F2F3',
          amber:       '#EC9040',
          'amber-light':'#F5B06E',
          'amber-dark':  '#C97428',
          'amber-pale':  '#FDF3E7',
        },
        neutral: {
          black:    '#0D0D0D',
          charcoal: '#4A4A4A',
          mid:      '#8A8A8A',
          light:    '#D4D4D4',
          pale:     '#F4F4F2',
          white:    '#FFFFFF',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:   ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '32px',
        xl:    '24px',
        lg:    '16px',
        md:    '8px',
        DEFAULT: '8px',
        sm:    '4px',
        pill: '9999px',
      },
      boxShadow: {
        sm:   '0 2px 8px rgba(0, 63, 71, 0.08)',
        md:   '0 6px 24px rgba(0, 63, 71, 0.12)',
        lg:   '0 16px 48px rgba(0, 63, 71, 0.18)',
        xl:   '0 24px 64px rgba(0, 63, 71, 0.22)',
        card: '0 4px 16px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #002830 0%, #003F47 50%, rgba(0,63,71,0.7) 100%)',
        'teal-gradient': 'linear-gradient(135deg, #003F47, #005A66)',
        'amber-gradient': 'linear-gradient(135deg, #EC9040, #F5B06E)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
