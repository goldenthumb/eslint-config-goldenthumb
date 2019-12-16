module.exports = {
    parser: "babel-eslint",
    extends: [
        "airbnb-base",
    ],
    rules: {
        "indent": ["error", 4],
        "max-len": ["error", { "code": 120 }],
    }
}