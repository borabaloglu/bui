import tailwindRadix from "tailwindcss-radix";

import { Config } from "tailwindcss";

import * as tailwindLight from "./src/configs/tailwind/tailwind.light";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [tailwindRadix({}), tailwindLight.config],
};

export default config;
