import js from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import eslintConfigPrettier from "eslint-config-prettier"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
  globalIgnores(["dist", "node_modules", "coverage", ".vite", "src/components/ui/**"]),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Best-practice safety rails
      "no-debugger": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Vite Fast Refresh: allow exporting constants (common in UI modules)
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // TypeScript ergonomics
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", disallowTypeAnnotations: false },
      ],

      // Import sorting
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Side effect imports.
            ["^\\u0000"],
            // Packages. `react` first, then other packages.
            ["^react", "^@?\\w"],
            // Internal aliases.
            ["^@/"],
            // Parent imports. Put `..` last.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Same-folder imports.
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Styles.
            ["^.+\\.s?css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
    },
  },
  // shadcn/ui-style modules often export helpers/variants alongside components
  {
    files: ["src/components/ui/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
])
