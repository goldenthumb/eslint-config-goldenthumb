module.exports = {
    parser: "babel-eslint",
    extends: [
        "airbnb-base",
    ],
    rules: {
        "consistent-return": "off",
        "dot-notation": "off",
        "guard-for-in": "off",
        "indent": ["error", 4],
        "no-case-declarations": "off",
        "no-nested-ternary": "off",
        "import/first": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unused-modules": ["warn", {"unusedExports": true}],
        "no-await-in-loop": "off",
        "no-bitwise": ["error", { "allow": ["&"] }],
        "no-console": "warn",
        "no-continue": "off",
        "no-unused-vars": ["warn", { "varsIgnorePattern": "css" }],
        "no-return-assign": "warn",
        "no-param-reassign": "off",
        "no-prototype-builtins": "warn",
        "no-restricted-syntax": "off",
        "no-shadow": "off",
        "max-len": ["error", { "code": 120 }],
        "global-require": "off",
        "object-curly-newline": "off",
        "operator-linebreak": "off",
        "camelcase": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off"
    }
}