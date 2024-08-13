import tailwindRadix from "tailwindcss-radix";

import { Config } from "tailwindcss";

import * as tailwindDark from "./src/configs/tailwind/tailwind.dark";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [tailwindRadix({}), tailwindDark.config],
};

export default config;
