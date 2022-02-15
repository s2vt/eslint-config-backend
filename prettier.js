const prettierSettings = require("./.prettierrc.json");

module.exports = {
    plugins: ["prettier"],
    extends: ["prettier"],
    rules: {
        "prettier/prettier": ["error", prettierSettings],
    },
};
