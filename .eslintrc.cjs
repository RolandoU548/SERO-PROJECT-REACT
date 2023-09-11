module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: ["standard", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "no-unused-vars": "warn",
        quotes: "off",
        semi: "off",
        "space-before-function-paren": "off",
        "import/no-absolute-path": "off",
        indent: "off"
    }
};
