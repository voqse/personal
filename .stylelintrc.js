module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'scss/no-global-function-names': null,
    'scss/selector-no-redundant-nesting-selector': true,
  },
};
