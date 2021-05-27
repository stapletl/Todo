module.exports = {
    // Standard ESLint
    // https://eslint.org/docs/rules/
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
    },
    "plugins": [
        "import",
        "react",
        "promise",
        "react-hooks"
    ],
    "settings": {
        "react": {
            "version": "detect"
        },
    },
    rules: {
        'indent': [1, 4, { "SwitchCase": 1 }],
        'array-bracket-newline': [1, { multiline: true, minItems: 3 }],
        'array-bracket-spacing': [
            1,
            'always',
            { singleValue: false, objectsInArrays: true, arraysInArrays: true },
        ],
        'array-element-newline': [1, { minItems: 3 }],
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [1, 'as-needed'],
        'arrow-spacing': [1, { before: true, after: true }],
        'block-scoped-var': 2,
        'callback-return': [
            2,
            [
                'callback',
                'cb',
                'next',
                'done',
                'resolve',
                'reject',
                'res',
                'response',
                'req',
                'request',
                'fn',
                'func',
            ],
        ],
        //camelcase: [1, { properties: 'never' }],
        'comma-dangle': [1, 'always-multiline'],
        'comma-style': [1, 'last'],
        complexity: [2, 15],
        'computed-property-spacing': [1, 'never'],
        'consistent-this': [1, 'self'],
        'constructor-super': 1,
        curly: [2, 'all'],
        'default-case': 2,
        'dot-location': [2, 'property'],
        'dot-notation': [2, { allowKeywords: true }],
        'eol-last': 2,
        eqeqeq: [2, 'smart'],
        'func-style': [1, 'declaration', { allowArrowFunctions: true }],
        'function-paren-newline': [2, 'multiline'],
        'generator-star-spacing': [1, 'before'],
        'guard-for-in': 2,
        'handle-callback-err': [2, '^(err|error)$'],
        'key-spacing': [1, { afterColon: true }],
        'keyword-spacing': [
            1,
            {
                before: true,
                after: true,
            },
        ],
        'lines-around-comment': [
            1,
            { beforeBlockComment: true, beforeLineComment: true, allowBlockStart: true },
        ],
        'max-depth': [1, 3],
        'max-len': [
            1,
            {
                code: 200,
                tabWidth: 2,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'max-nested-callbacks': [1, 3],
        'multiline-ternary': [1, 'always-multiline'],
        'new-cap': [1, { newIsCap: true, properties: false }],
        'new-parens': 1,
        'no-alert': 2,
        'no-caller': 2,
        'no-catch-shadow': 2,
        'no-class-assign': 2,
        'no-cond-assign': [2, 'always'],
        'no-console': 0,
        'no-const-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-delete-var': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-else-return': 2,
        'no-empty-character-class': 2,
        'no-empty': 2,
        'no-eval': 2,
        'no-ex-assign': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-boolean-cast': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 1,
        'no-func-assign': 2,
        'no-implicit-coercion': [2, { boolean: false, string: true }],
        'no-implied-eval': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-invalid-this': 1,
        'no-irregular-whitespace': 2,
        'no-iterator': 2,
        'no-label-var': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-lonely-if': 2,
        'no-loop-func': 1,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-multiple-empty-lines': [1, { max: 2 }],
        'no-native-reassign': 2,
        'no-negated-in-lhs': 2,
        'no-new-func': 2,
        'no-new-object': 2,
        'no-new-require': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-obj-calls': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-return-assign': [2, 'always'],
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-shadow-restricted-names': 2,
        'no-shadow': 2,
        'no-spaced-func': 2,
        'no-sparse-arrays': 2,
        'no-sync': 1,
        'no-this-before-super': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 1,
        'no-undef-init': 2,
        'no-undef': 2,
        'no-unexpected-multiline': 2,
        'no-unneeded-ternary': 1,
        'no-unreachable': 2,
        'no-useless-call': 2,
        'no-useless-constructor': 2,
        'no-var': 1,
        'no-void': 2,
        'no-with': 2,
        'object-curly-spacing': [1, 'always', { arraysInObjects: false, objectsInObjects: false }],
        'object-property-newline': [1, { allowAllPropertiesOnSameLine: true }],
        'object-shorthand': [1, 'always'],
        'operator-assignment': [1, 'always'],
        'operator-linebreak': [1, 'after'],
        'padded-blocks': [1, 'never'],
        'prefer-const': 1,
        'prefer-spread': 1,
        radix: 2,
        'require-yield': 2,
        'semi-spacing': [1, { after: true }],
        'space-before-blocks': [1, 'always'],
        'space-in-parens': [1, 'never'],
        'space-infix-ops': 1,
        'space-unary-ops': [1, { words: true }],
        'spaced-comment': [1, 'always', { exceptions: ['-', ' +', ' =', ' *'] }],
        'template-curly-spacing': [2, 'always'],
        'use-isnan': 2,
        'valid-typeof': 2,
        'vars-on-top': 1,
        'wrap-iife': [2, 'outside'],
        yoda: [2, 'never', { exceptRange: true }],

        // eslint-plugin-import
        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules

        // TODO: FIX THIS. For whatever reason, it's not working for the index.jsx files
        //'import/no-unresolved': [2, { "caseSensitive": false }],
        'import/default': 2,
        'import/named': 2,
        'import/no-cycle': 2,
        'import/no-self-import': 2,
        'import/namespace': 2,
        'import/no-useless-path-segments': 1,
        'import/export': 2,
        'import/no-mutable-exports': 2,
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/extensions': 1,
        'import/newline-after-import': 1,
        'import/no-anonymous-default-export': [1, {
            'allowArray': false,
            'allowLiteral': false,
            'allowObject': false
        }],

        // eslint-plugin-react
        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/boolean-prop-naming': 0,
        'react/button-has-type': 1,
        'react/default-props-match-prop-types': 1,
        'react/destructuring-assignment': [1, 'always', { 'ignoreClassFields': true }],
        'react/display-name': 0,
        'react/forbid-component-props': 0,
        'react/forbid-dom-props': 0,
        'react/forbid-foreign-prop-types': 0,
        'react/function-component-definition': [1, {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
        }],
        'react/jsx-boolean-value': [1, 'always'],
        'react/jsx-child-element-spacing': 2,
        'react/jsx-closing-bracket-location': [1, 'after-props'],
        'react/jsx-closing-tag-location': 1,
        'react/jsx-curly-brace-presence': [1, { props: 'never', children: 'never' }],
        'react/jsx-curly-spacing': [
            1,
            {
                when: 'always',
                children: true,
                allowMultiline: true,
                spacing: { objectLiterals: 'never' },
            },
        ],
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
        'react/jsx-fragments': [1, 'syntax'],
        'react/jsx-handler-names': 1,
        'react/jsx-indent-props': [1, 4],
        'react/jsx-indent': [1, 4],
        'react/jsx-key': 1,
        // TODO: CLEAN UP AND ENFORCE THIS RULE, IT'S A GOOD ONE
        'react/jsx-max-depth': [1, { max: 5 }],
        'react/jsx-max-props-per-line': [2, { maximum: 4, when: 'always' }],
        'react/jsx-no-bind': 0,
        'react/jsx-no-comment-textnodes': 1,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-literals': 0,
        'react/jsx-no-script-url': 2,
        'react/jsx-no-target-blank': [2, { enforceDynamicLinks: 'always' }],
        'react/jsx-no-undef': 1,
        'react/jsx-no-useless-fragment': 1,
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-pascal-case': 1,
        'react/jsx-props-no-multi-spaces': 1,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-default-props': 0,
        'react/jsx-sort-props': 0,
        'react/jsx-tag-spacing': [
            1,
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never',
            },
        ],
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': [1, { return: 'parens-new-line', arrow: 'parens-new-line' }],
        'react/no-access-state-in-setstate': 2,
        'react/no-array-index-key': 1,
        'react/no-children-prop': 1,
        'react/no-danger-with-children': 2,
        'react/no-danger': 2,
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-find-dom-node': 2,
        'react/no-is-mounted': 2,
        'react/no-multi-comp': 2,
        'react/no-redundant-should-component-update': 1,
        'react/no-render-return-value': 1,
        'react/no-set-state': 0,
        'react/no-string-refs': 1,
        'react/no-this-in-sfc': 2,
        'react/no-typos': 1,
        'react/no-unknown-property': 1,
        'react/no-unsafe': 1,
        'react/no-unused-prop-types': 1,
        'react/no-unused-state': 1,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': 1,
        'react/prefer-read-only-props': 0,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 1,
        'react/require-default-props': 1,
        'react/require-optimization': 1,
        'react/require-render-return': 2,
        'react/self-closing-comp': 1,
        'react/sort-comp': 0,
        'react/sort-prop-types': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react/style-prop-object': 2,
        'react/void-dom-elements-no-children': 2,

        // eslint-plugin-promise
        // https://github.com/xjamundx/eslint-plugin-promise/tree/master/docs/rules
        'promise/catch-or-return': 2,
        'promise/no-return-wrap': 2,
        'promise/param-names': 2,
        'promise/always-return': 2,
        'promise/no-native': 0,
        'promise/no-nesting': 1,
        'promise/no-promise-in-callback': 1,
        'promise/no-callback-in-promise': 1,
        'promise/avoid-new': 0,
        'promise/no-return-in-finally': 1,
        'promise/prefer-await-to-then': 1,
        'promise/prefer-await-to-callbacks': 1,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    },
};