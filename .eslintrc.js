module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    'react/jsx-pascal-case': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        'no-var': 'error',
        'react/jsx-uses-vars': 1,
        'react/jsx-uses-react': 1,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        eqeqeq: 'error',
        'react/jsx-pascal-case': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'no-debugger': 'warn',
      },
    },
  ],
}
