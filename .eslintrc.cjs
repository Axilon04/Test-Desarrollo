module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  ignorePatterns: [
    'dist/',
    'node_modules/',
    'tailwind.config.js',
    '.eslintrc.cjs',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
