import eslint from '@eslint/js'; // Import core ESLint rules
import react from 'eslint-plugin-react'; // Import React-specific ESLint rules
import tseslint from 'typescript-eslint'; // Import TypeScript-specific ESLint rules

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended, // Use the recommended ESLint rules as the base
  ...tseslint.configs.recommended, // Add TypeScript-specific recommended rules

  {
    files: ['**/*.ts', '**/*.tsx'], // Apply these rules only to TypeScript files
    plugins: {
      react, // Enable React plugin
      '@typescript-eslint': tseslint.plugin, // Enable TypeScript plugin
    },
    rules: {
      // ✅ React-specific rules
      'react/react-in-jsx-scope': 'off', // Not required in modern React (Next.js, Vite)
      'react/prop-types': 'off', // Disable PropTypes rule (TypeScript handles type checking)

      // ✅ TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': [
        'warn', // Warn about unused variables
        { argsIgnorePattern: '^_' }, // Ignore variables starting with _
      ],
      '@typescript-eslint/no-explicit-any': 'warn', // Warn when using `any` type
      '@typescript-eslint/explicit-function-return-type': 'off', // Allow TypeScript to infer return types

      // ✅ General best practices
      'no-console': 'warn', // Warn when using console.log (remove before production)
      'no-unused-vars': 'off', // Disabled because TypeScript already handles this
      eqeqeq: ['error', 'always'], // Enforce strict equality (=== instead of ==)
    },
  },
];
