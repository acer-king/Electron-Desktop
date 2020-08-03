module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:react/recommended'],
  globals: {
    __static: true
  },
  plugins: ['html'],
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'space-before-function-paren': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-blocks':0,
    'semi':0,
    'object-curly-spacing':0,
    'key-spacing':0,
    'quotes':0,
    'object-curly-spacing':0,
    'lines-between-class-members':0,
    'no-unused-vars':0,
    'no-useless-constructor':0,
    'no-unused-expressions':0,
    'no-unreachable':0,
    'space-in-parens':0,
    'comma-dangle':0,
    'comma-spacing':0,
    'brace-style':0,
    'prefer-promise-reject-errors':0,
    'indent':0,
    'no-case-declarations':0,
    'no-multi-spaces':0,
    'padded-blocks':0,
    'no-trailing-spaces':0,
    'arrow-spacing':0,
    "react/prop-types": 0,
    'no-multiple-empty-lines':0,
    'quote-props':0
  }
}
