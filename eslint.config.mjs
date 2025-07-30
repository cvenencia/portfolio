import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'import/no-restricted-paths': [
        'error',
        {
          basePath: './src',
          zones: [
            {
              target: ['./!(features)/**/*', './!(features)*'],
              from: ['./features/*/!(index.*)', './features/*/!(index.*)/**/*'],
              message:
                'Cannot import anything except the index file within a feature folder',
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
