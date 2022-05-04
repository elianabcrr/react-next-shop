module.exports = {
  // definir reglas
  root: true,
  env:{
    browser: true, 
    amd: true, 
    node: true, 
    es6: true, 
  },
  extends: [ //plugins
    'eslint:recommended', 
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: { //recursos o reglas
    'semi': ['error', 'always'],
    'prettier/prettier': 0,
  }
};