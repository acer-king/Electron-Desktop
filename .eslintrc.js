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
    'space-before-blocks':'never',
    'semi':'never',
    'object-curly-spacing':'never',
    'key-spacing':'never',
    'quotes':'never',
    'object-curly-spacing':'never',
    'lines-between-class-members':'never',
    'no-unused-vars':'never',
    'no-useless-constructor':'never',
    'no-unused-expressions':'never',
    'no-unreachable':'never',
    'space-in-parens':'never',
    'comma-dangle':'never',
    'comma-spacing':'never',
    'brace-style':'never',
    'prefer-promise-reject-errors':'never',
    'indent':'never',
    'no-case-declarations':'never',
    'no-multi-spaces':'never',
    'padded-blocks':'never',
    'no-trailing-spaces':'never',
    'arrow-spacing':'never',
    "react/prop-types": 0,
    'no-multiple-empty-lines':'never',
    'quote-props':'never'
  }
}
