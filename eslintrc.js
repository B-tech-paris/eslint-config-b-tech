module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:react-hooks/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  ignorePatterns: ["eslintrc.js"],
  rules: {
    "prefer-destructuring": "off",
    "no-nested-ternary": "off",
    "max-len": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    indent: ["error", 2, { "SwitchCase": 1 }],
    "react/jsx-props-no-spreading": "off",
    "prefer-template": "off",
    'arrow-parens': ["error", "as-needed"],
    "nonblock-statement-body-position": ["error", "below"],
    curly: ["error", "multi-or-nest"],
    "brace-style": ["error", "stroustrup"],
    "import/no-unresolved": 'off',
    'import/prefer-default-export': 'off',
    "react/prop-types": 'error',
    "no-unused-vars": 1,
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
      }
    ]
  },
};
