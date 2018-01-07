module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true
  },
  globals: {
    '$': true
  },
  rules: {
    // some rules we should disable to support older browsers
    'comma-dangle': 'off',
    'no-var': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',

    // rules disabled because we disagree!
    'no-plusplus': 'off',

    // rules disabled so linter will pass (enable them and fix)
    camelcase: 'off',
    indent: 'off',
    'func-names': 'off',
    'key-spacing': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-assign': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'padded-blocks': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'vars-on-top': 'off',
  }
};
