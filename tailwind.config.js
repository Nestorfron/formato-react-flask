/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Si estás usando un directorio `src`:
    "./src/front/js/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/front/js/components/*.{js,ts,jsx,tsx,mdx}",

    // Incluye el tema de NextUI desde node_modules:
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans], // Fuente extendida
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {},
      themes: {
        dark: {
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        light: {
          colors: {
            background: "#FFFFFF", // Fondo claro principal
            foreground: "#000000", // Color del texto y elementos en primer plano
            primary: {
              50: "#E9E3F9",
              100: "#D4C7F2",
              200: "#B59EE6",
              300: "#9675DA",
              400: "#774DCE",
              500: "#5E2DC3", // Color principal en modo claro
              600: "#5026A4",
              700: "#421E85",
              800: "#341766",
              900: "#260F47",
              DEFAULT: "#5E2DC3", // Color primario por defecto
              foreground: "#ffffff", // Color de texto sobre botones primarios
            },
            focus: "#9675DA", // Color de foco
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
