import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  outDir: 'dist',
  format: ["cjs", "esm"],
  dts: true,
  silent: true,
  splitting: false,
  clean: true,
  bundle: true,
  minify: true,
  treeshake: true,
});
