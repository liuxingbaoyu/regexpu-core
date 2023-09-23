const characterClassFixtures = [
	{
		pattern: '[^K]', // LATIN CAPITAL LETTER K
		flags: 'iu',
		expected: '(?:(?![K\\u212A\\uD800-\\uDFFF])[\\s\\S]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^k]', // LATIN SMALL LETTER K
		flags: 'iu',
		expected: '(?:(?![k\\u212A\\uD800-\\uDFFF])[\\s\\S]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^\u212a]', // KELVIN SIGN
		flags: 'iu',
		expected: '(?:(?![K\\u212A\\uD800-\\uDFFF])[\\s\\S]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^K]', // LATIN CAPITAL LETTER K
		flags: 'iu',
		expected: '[^K]',
		options: {}
	},
	{
		pattern: '[^k]', // LATIN SMALL LETTER K
		flags: 'iu',
		expected: '[^k]',
		options: {}
	},
	{
		pattern: '[^\u212a]', // KELVIN SIGN
		flags: 'iu',
		expected: '[^\u212a]',
		options: {}
	},
	{
		pattern: '[^\u{1D50E}]', // MATHEMATICAL FRAKTUR CAPITAL K
		flags: 'iu',
		expected: '(?:(?![\\uD800-\\uDFFF])[\\s\\S]|[\\uD800-\\uD834\\uD836-\\uDBFF][\\uDC00-\\uDFFF]|\\uD835[\\uDC00-\\uDD0D\\uDD0F-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^K]', // LATIN CAPITAL LETTER K
		flags: 'u',
		matches: ["k", "\u212a", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["K"],
		expected: '(?:[\\0-JL-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^k]', // LATIN SMALL LETTER K
		flags: 'u',
		matches: ["K", "\u212a", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["k"],
		expected: '(?:[\\0-jl-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^\u212a]', // KELVIN SIGN
		flags: 'u',
		matches: ["K", "k", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["\u212a"],
		expected: '(?:[\\0-\\u2129\\u212B-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^\u{1D50E}]', // MATHEMATICAL FRAKTUR CAPITAL K
		flags: 'u',
		matches: ["K", "k", "\u{12345}", "\u{1D50F}", "\uDAAA", "\uDDDD"],
		nonMatches: ["\u{1D50E}"],
		expected: '(?:[\\0-\\uFFFF]|[\\uD800-\\uD834\\uD836-\\uDBFF][\\uDC00-\\uDFFF]|\\uD835[\\uDC00-\\uDD0D\\uDD0F-\\uDFFF])',
		options: { unicodeFlag: 'transform' }
	},
	{
		pattern: '[^K]', // LATIN CAPITAL LETTER K
		flags: 'u',
		expected: '[^K]',
		options: {}
	},
	{
		pattern: '[^k]', // LATIN SMALL LETTER K
		flags: 'u',
		expected: '[^k]',
		options: {}
	},
	{
		pattern: '[^\u212a]', // KELVIN SIGN
		flags: 'u',
		expected: '[^\u212a]',
		options: {}
	},
	{
		pattern: '[^\u{1D50E}]', // MATHEMATICAL FRAKTUR CAPITAL K
		flags: 'u',
		expected: '[^\u{1D50E}]',
		options: {}
	}
];

exports.characterClassFixtures = characterClassFixtures;
