import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Temporarily ignore unused vars
      "react/no-unescaped-entities": "off",       // Temporarily ignore JSX quotes warnings
      "react-hooks/exhaustive-deps": "off",       // Temporarily ignore hook deps
      "@typescript-eslint/no-explicit-any": "warn", // Keep this as a warning
    },
  },
];

export default eslintConfig;
