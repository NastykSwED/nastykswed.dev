/** @type {import("prettier").PrettierConfig} */
export default {
	// React Options
	jsxSingleQuote: true,
	// Default Prettier Options
	useTabs: true,
	tabWidth: 2,
	endOfLine: 'lf',
	singleQuote: true,
	arrowParens: 'avoid',
	trailingComma: 'all',
	htmlWhitespaceSensitivity: 'ignore',
	importOrder: [
		'<TYPES>',
		'<TYPES>^[.]',
		'',
		'<BUILTIN_MODULES>',
		'',
		'<THIRD_PARTY_MODULES>',
		'',
		'^@(?!/).*',
		'',
		'^@/.*',
		'',
		'^[./]',
	],
	importOrderParserPlugins: [
		// COMMENT FOR BETTER DIFF
		'typescript',
		'jsx',
		'decorators-legacy',
	],
	plugins: [
		// COMMENT FOR BETTER DIFF
		'@ianvs/prettier-plugin-sort-imports',
		'prettier-plugin-pkg',
		'prettier-plugin-astro',
		'prettier-plugin-svelte',
		/**
		 * **NOTE** tailwind plugin must come last!
		 * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
		 */
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
