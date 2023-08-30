import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        "llg":"1120px"
      },
      colors:{
        "primary":"#2c5aff",
        "title":"#262722",
        "text":"#26272f",
        "dark-bg":"#000000",
        "light-bg":"#ffffff",

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
