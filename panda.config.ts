import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  exclude: [],
  include: ["./src/**/*.ts{,x}"],
  jsxFramework: "react",
  outdir: "panda",
  outExtension: 'js',
  preflight: true,
  theme: { tokens: { colors: { primary: { value: "green" } } } }
});
