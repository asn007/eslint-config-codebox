module.exports = {
  extends: [
    'eslint-config-codebox-base',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-prettier/react'
  ].map(require.resolve),
  rules: {},
}
