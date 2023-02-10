module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'quote-props': ['error', 'as-needed'],
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,
    //
    // Best Practices
    //
    'block-scoped-var': 0,
    complexity: 0,
    'consistent-return': 2,
    curly: 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2, // disallow use of eval()
    'no-extend-native': 2, // disallow adding to native types
    'no-extra-bind': 2, // disallow unnecessary function binding
    'no-fallthrough': 2, // disallow fallthrough of case statements
    'no-floating-decimal': 2,
    'no-implied-eval': 2, // disallow use of eval()-like methods
    'no-iterator': 2, // disallow usage of __iterator__ property
    'no-labels': 2, // disallow use of labeled statements
    'no-lone-blocks': 2, // disallow unnecessary nested blocks
    'no-loop-func': 2, // disallow creation of functions within loops
    'no-multi-spaces': 2, // disallow use of multiple spaces
    'no-multi-str': 2, // disallow use of multiline strings
    'no-native-reassign': 2, // disallow reassignments of native objects
    'no-new': 2, // disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 2, // disallow use of new operator for Function object
    'no-new-wrappers': 2, // disallows creating new instances of String,Number, and Boolean
    'no-octal': 2, // disallow use of octal literals
    'no-octal-escape': 2,
    'no-param-reassign': 2, // disallow reassignment of function parameters (off by default)
    'no-process-env': 2, // disallow use of process.env (off by default)
    'no-proto': 2, // disallow usage of __proto__ property
    'no-redeclare': 2, // disallow declaring the same variable more then once
    'no-return-assign': 2, // disallow use of assignment in return statement
    'no-script-url': 2, // disallow use of javascript: urls.
    'no-self-compare': 2,
    'no-sequences': 2, // disallow use of comma operator
    'no-throw-literal': 2, // restrict what can be thrown as an exception (off by default)
    'no-unused-expressions': 2, // disallow usage of expressions in statement position
    'no-void': 2, // disallow use of void operator (off by default)
    'no-warning-comments': [0, {terms: ['todo', 'fixme'], location: 'start'}],
    'no-with': 2, // disallow use of the with statement
    radix: 2, // require use of the second argument for parseInt() (off by default)
    'vars-on-top': 2,
    'wrap-iife': 2,
    yoda: 2, // require or disallow Yoda conditions

    //
    // Strict Mode
    //
    // These rules relate to using strict mode.
    //
    strict: 0, // controls location of Use Strict Directives. 0: required by `babel-eslint`

    //
    // Variables
    //
    // These rules have to do with variable declarations.
    //
    'no-catch-shadow': 2,
    'no-delete-var': 2, // disallow deletion of variables
    'no-label-var': 2, // disallow labels that share a name with a variable
    'no-shadow': 2, // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 2, // disallow shadowing of names such as arguments
    'no-undef': 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef-init': 2, // disallow use of undefined when initializing variables
    'no-undefined': 2, // disallow use of undefined variable (off by default)
    'no-unused-vars': 2, // disallow declaration of variables that are not used in the code
    'no-use-before-define': 2, // disallow use of variables before they are defined

    //
    //Stylistic Issues
    //
    // These rules are purely matters of style and are quite subjective.
    //
    indent: [1, 2], // this option sets a specific tab width for your code (off by default)
    'brace-style': 1, // enforce one true brace style (off by default)
    camelcase: 1, // require camel case names
    'comma-spacing': [1, {before: false, after: true}],
    'comma-style': [1, 'last'], // enforce one true comma style (off by default)
    'consistent-this': [1, '_this'],
    'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
    'func-names': 0, // require function expressions to have a name (off by default)
    'func-style': 0, // enforces use of function declarations or expressions (off by default)
    'key-spacing': [1, {beforeColon: false, afterColon: true}],
    'max-nested-callbacks': [1, 3],
    'new-cap': [1, {newIsCap: true, capIsNew: false}],
    'new-parens': 1,
    'newline-after-var': 0, // allow/disallow an empty newline after var statement (off by default)
    'no-array-constructor': 1, // disallow use of the Array constructor
    'no-inline-comments': 0, // disallow comments inline after code (off by default)
    'no-lonely-if': 1, // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 1, // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': [1, {max: 2}], // disallow multiple empty lines (off by default)
    'no-nested-ternary': 1, // disallow nested ternary expressions (off by default)
    'no-new-object': 1, // disallow use of the Object constructor
    'no-spaced-func': 1, // disallow space between function identifier and application
    'no-ternary': 0, // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 1, // disallow dangling underscores in identifiers
    'one-var': [1, 'never'], // allow just one var statement per function (off by default)
    'operator-assignment': [1, 'never'],
    'padded-blocks': [1, 'never'], // enforce padding within blocks (off by default)
    quotes: [1, 'single'], // specify whether double or single quotes should be used
    semi: [1, 'always'], // require or disallow use of semicolons instead of ASI
    'semi-spacing': [1, {before: false, after: true}],
    'sort-vars': 0,
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, {anonymous: 'always', named: 'never'}],
    'space-in-parens': [1, 'never'],
    'space-unary-ops': [1, {words: true, nonwords: false}],
    'wrap-regex': 0,

    //
    // ECMAScript 6
    //
    // These rules are only relevant to ES6 environments and are off by default.
    //
    'no-var': 2, // require let or const instead of var (off by default)
    'generator-star-spacing': [2, 'before'],

    //
    // Legacy
    //
    // The following rules are included for compatibility with JSHint and JSLint.
    // While the names of the rules may not match up with the JSHint/JSLint counterpart,
    // the functionality is the same.
    //
    'max-depth': [2, 3], // specify the maximum depth that blocks can be nested (off by default)
    'max-len': [2, 100, 2], // specify the maximum length of a line in your program (off by default)
    'no-bitwise': 0, // disallow use of bitwise operators (off by default)
    'react-hooks/exhaustive-deps': 0,
    'no-plusplus': 0, // disallow use of unary operators, ++ and -- (off by default)

    //
    // eslint-plugin-react
    //
    // React specific linting rules for ESLint
    //
    'react/display-name': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2
  },
  extends: [
    'react-app'
  ]
};
