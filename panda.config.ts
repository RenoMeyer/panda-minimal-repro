import { defineConfig } from "@pandacss/dev";
import preset from './preset.js';

export default defineConfig({
  exclude: [],
  include: ["./src/**/*.ts{,x}"],
  jsxFramework: "react",
  outdir: "panda",
  outExtension: 'js',
  preflight: true,
  presets: [preset]
});
