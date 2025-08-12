import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: [
      "js/recommended",
      "next/core-web-vitals",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "single"],
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
