module.exports = {
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "airbnb/hooks",
    ],
    rules: {
        "dot-notation": "off",
        "indent": ["error", 4],
        "max-len": ["error", { "code": 120 }],
        "no-await-in-loop": "off",
        "no-param-reassign": "off",
        "no-restricted-syntax": "off",
        "no-shadow": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "object-curly-newline": "off",
        "operator-linebreak": ["error", "after"],
        "react/jsx-closing-tag-location": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/jsx-wrap-multilines": "off",
        "react/prop-types": "warn",
        "react/require-default-props": "off",
    }
}