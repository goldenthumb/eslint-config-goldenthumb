module.exports = {
    parser: "babel-eslint",
    rules:{
        "no-continue": "off",
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
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
        "semi": ["error", "always"],
    },
}