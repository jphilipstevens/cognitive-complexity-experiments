module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:sonarjs/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        // "@typescript-eslint",
        "sonarjs"
    ],
    "rules": {
        "sonarjs/cognitive-complexity": ["error", 0],
    }
};