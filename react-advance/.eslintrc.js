module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // Add your friend's rules into extends array if required
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Vite handles React auto-import
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn', // Avoid excessive use of `any`
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional for inferred types
    'react/prop-types': 'off', // Not required in TypeScript
    'no-console': 'warn', // General best practice
    'no-unused-vars': 'off', // Handled by TypeScript's rule
    eqeqeq: ['error', 'always'], // Enforce strict equality
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
