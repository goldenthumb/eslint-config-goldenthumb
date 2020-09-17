module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:react/recommended', './base.js'],
    rules: {
        'jsx-a11y/label-has-associated-control': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-wrap-multilines': 'off',
        'react/prop-types': 'warn',
        'react/require-default-props': 'off',
    },
};
