import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Agregar tamaños personalizados para las imágenes
      width: {
        'image-60': '15rem',  // Personalizado, por ejemplo 60px = 15rem
        'image-80': '20rem',  // Personalizado, por ejemplo 80px = 20rem
        'image-100': '25rem',
        'image-200': '50rem' // Personalizado, por ejemplo 100px = 25rem
      },
      height: {
        'image-60': '15rem',  // Personalizado, por ejemplo 60px = 15rem
        'image-80': '20rem',  // Personalizado, por ejemplo 80px = 20rem
        'image-100': '25rem',
        'image-200': '50rem',// Personalizado, por ejemplo 100px = 25rem
      },
    },
  },
  plugins: [],
} satisfies Config;
