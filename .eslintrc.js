module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    },
  },
  rules: {
    semi: 0,
    quotes: [2, 'single'],
    'no-console': 1,
    'no-unused-vars': 1,
    'comma-dangle': 1,
    'max-len': [1, { code: 150 }],
    'import/extensions': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', 'ts'] }],
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
  },
};
