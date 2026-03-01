import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import reactPlugin from 'eslint-plugin-react'

const eslintConfig = defineConfig([
  ...nextVitals,
  // Use the new JSX runtime — turns off react/jsx-uses-react globally so that
  // unused React imports can be detected by @typescript-eslint/no-unused-vars.
  reactPlugin.configs.flat['jsx-runtime'],
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    settings: {
      react: { version: '19' }, // Avoids auto-detection crash
    },
    languageOptions: {
      parserOptions: {
        // New JSX transform (react-jsx) doesn't need React in scope.
        // @typescript-eslint/parser defaults to jsxPragma:'React', which marks
        // the React import as used in any file with JSX, defeating no-unused-vars.
        jsxPragma: null,
      },
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
])

export default eslintConfig
