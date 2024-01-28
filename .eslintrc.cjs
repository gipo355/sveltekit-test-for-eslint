/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	// settings: {
	// 	'import/resolver': {
	// 		typescript: {
	// 			alwaysTryTypes: true,
	// 			project: './tsconfig.json'
	// 		},
	// 		// node: true
	// 		node: {
	// 			extensions: ['.js', '.jsx', '.cjs', '.mjs', '.ts', '.tsx', '.mts', '.cts']
	// 		}
	// 	},
	// 	'import/parsers': {
	// 		'@typescript-eslint/parser': ['.ts', '.tsx']
	// 	}
	// },
	extends: [
		'eslint:recommended',
		// disables eslint rules already checked by typescript:cked
		'plugin:@typescript-eslint/eslint-recommended',

		// no typed linting:
		// 'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/strict',
		'plugin:@typescript-eslint/stylistic',

		// with typed linting, has problems with svelte and fastify:
		// 'plugin:@typescript-eslint/recommended-type-checked',
		// 'plugin:@typescript-eslint/strict-type-checked',
		// 'plugin:@typescript-eslint/stylistic-type-checked',
		// 'plugin:@typescript-eslint/recommended-type-checked',
		// what is this?

		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',

		// import:
		// 'plugin:import/recommended',
		// 'plugin:import/typescript',

		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		project: './tsconfig.json'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			}
		}
	]
};
