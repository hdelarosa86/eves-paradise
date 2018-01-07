// @see https://stylelint.io/user-guide/configuration/
// NOTE: Using the .js config format to allow for comments
module.exports = {
  // we can use some standard/shared config in the future!
  // extends: 'stylelint-config-standard',

  rules: {
    'block-no-empty': null,
    'color-no-invalid-hex': true,

    // *** Doesn't currently pass:
    // 'comment-empty-line-before': [ 'always', {
    //   'ignore': ['stylelint-commands', 'after-comment']
    // } ],

    'declaration-colon-space-after': 'always',

    // *** main.css uses 4 spaces, but styles.css uses 2 (but then gets inconsistent)
    // 'indentation': [2],

    // *** 2 is common, but there are lots in the code so i'm commenting this out
    // 'max-empty-lines': 2,

    // *** This won't pass yet
    // 'rule-empty-line-before': [ 'always', {
    //   'except': ['first-nested'],
    //   'ignore': ['after-comment']
    // } ],

    // *** I added more values in here so the current code will pass
    'unit-whitelist': ['dppx', 'dpi', 'em', 'ms', 'px', 'rem', '%', 's']
  }
};
