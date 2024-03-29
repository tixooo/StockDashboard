module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-unused-vars': 'off',
    'react/prop-types': 'off'
  }
};
