import type { Config } from "tailwindcss";

const config: Config = {
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
        prlavender: "#7456FF",
        bgmedsos: "#110F19",
        prgraay: "#707070",
        trblack: "#131313",
        srblack: "#0F0F0F",
        srgray: "#999999"
      },
      backgroundImage: {
        "heropattern": "url('https://res.cloudinary.com/dkszgncal/image/upload/Porto-upan/j3yufjxp9fdvh28havn0.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;
