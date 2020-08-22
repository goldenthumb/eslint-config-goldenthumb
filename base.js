module.exports = {
    parser: 'babel-eslint',
    rules: {
        'no-bitwise': 'off',
        'no-nested-ternary': 'off',
        'no-return-assign': 'off',
        'no-continue': 'off',
        'no-plusplus': 'off',
        'dot-notation': 'off',
        'require-await': 'error',
        'require-yield': 'error',
        'eol-last': ['error', 'always'],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        indent: ['error', 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral *'] }],
        'max-len': ['error', { code: 120 }],
        'no-await-in-loop': 'off',
        'no-param-reassign': 'off',
        'no-restricted-syntax': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': ['error', 'after'],
        semi: ['error', 'always'],
    },
};
