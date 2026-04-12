import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

const eslintConfig = defineConfig([
  ...nextVitals,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@components", "./app/_components"],
            ["@hooks", "./app/_hooks"],
            ["@services", "./app/_services"],
            ["@utils", "./app/_utils"],
          ],
          extensions: [".ts", ".js", ".jsx", ".json"],
        },
      },
    },
  },
]);

export default eslintConfig;
