module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
    plugins: {"prettier"},
    rules: {
      "prettier/prettier": "error"
    }
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
  },
};
