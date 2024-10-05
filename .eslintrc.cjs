const { tabWidth } = require("./.prettierrc.cjs");

module.exports = {
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: "module",
	},
	rules: {
		semi: 2,
		"comma-dangle": [
			"error",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "always-multiline",
			},
		],
		tabWidth: 2,
	},
};
