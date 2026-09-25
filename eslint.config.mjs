export default [
    {
        languageOptions: {
            globals: {
                browser: true,
                node: true,
                $: "readonly",
                jQuery: "readonly"
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
