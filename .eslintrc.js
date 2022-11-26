module.exports = {
    extends: [
        'plugin:vue/essential',
        'plugin:nuxt/recommended',
    ],
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        requireConfigFile: false,
        ecmaVersion: 2020,
    },
    rules: {
        'indent': ['warn', 4, { 'SwitchCase': 1 }],
        'quotes': ['warn', 'single'],
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    }
}
