module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    // required to lint *.vue files
    plugins: ['vue', 'prettier', 'html'],
    // add your custom rules here
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['warn', 4],
        'linebreak-style': ['warn', 'unix'],
        quotes: ['warn', 'single'],
        semi: ['warn', 'always']
    }
}
