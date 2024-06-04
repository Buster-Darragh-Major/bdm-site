import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended
});

export default [
    ...compat.extends("standard-with-typescript").map(
        config => ({
            ...config,
            files: ["**/*.tsx"],
            rules: {
                ...config.rules,
                // ...other your custom rules
            }
        })
    ),
    prettierConfig, // Turns off all ESLint rules that have the potential to interfere with Prettier rules.
];