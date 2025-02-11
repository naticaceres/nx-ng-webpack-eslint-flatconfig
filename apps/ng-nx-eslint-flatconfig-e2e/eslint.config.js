const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:cypress/recommended'),
  {
    files: [
      'apps/ng-nx-eslint-flatconfig-e2e/**/*.ts',
      'apps/ng-nx-eslint-flatconfig-e2e/**/*.tsx',
      'apps/ng-nx-eslint-flatconfig-e2e/**/*.js',
      'apps/ng-nx-eslint-flatconfig-e2e/**/*.jsx',
    ],
    rules: {},
  },
];
