module.exports = {
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "airbnb/hooks",
    ],
    rules: {
        "indent": ["error", 4],
        "dot-notation": "off",
        "max-len": ["error", { "code": 120 }],
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
    }
}