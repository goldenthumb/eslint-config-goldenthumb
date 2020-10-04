module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', './index.js'],
    rules: {
        'jsx-a11y/alt-text': 'warn',
        'jsx-a11y/anchor-is-valid': 'warn',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'warn',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react/button-has-type': 'off',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-curly-newline': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-key': 'warn',
        'react/jsx-one-expression-per-line': 'warn',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-array-index-key': 'warn',
        'react/no-danger': 'warn',
        'react/no-unescaped-entities': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
    },
};
