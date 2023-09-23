const TRANSFORM_U = { unicodeFlag: 'transform', unicodeSetsFlag: 'transform' };

const Basic_Emoji = {
	get all() { return `${this.strings}|[${this.chars}]` },
	strings: "🅰️|🅱️|🅾️|🅿️|🈂️|🈷️|🌡️|🌤️|🌥️|🌦️|🌧️|🌨️|🌩️|🌪️|🌫️|🌬️|🌶️|🍽️|🎖️|🎗️|🎙️|🎚️|🎛️|🎞️|🎟️|🏋️|🏌️|🏍️|🏎️|🏔️|🏕️|🏖️|🏗️|🏘️|🏙️|🏚️|🏛️|🏜️|🏝️|🏞️|🏟️|🏳️|🏵️|🏷️|🐿️|👁️|📽️|🕉️|🕊️|🕯️|🕰️|🕳️|🕴️|🕵️|🕶️|🕷️|🕸️|🕹️|🖇️|🖊️|🖋️|🖌️|🖍️|🖐️|🖥️|🖨️|🖱️|🖲️|🖼️|🗂️|🗃️|🗄️|🗑️|🗒️|🗓️|🗜️|🗝️|🗞️|🗡️|🗣️|🗨️|🗯️|🗳️|🗺️|🛋️|🛍️|🛎️|🛏️|🛠️|🛡️|🛢️|🛣️|🛤️|🛥️|🛩️|🛰️|🛳️|©️|®️|‼️|⁉️|™️|ℹ️|↔️|↕️|↖️|↗️|↘️|↙️|↩️|↪️|⌨️|⏏️|⏭️|⏮️|⏯️|⏱️|⏲️|⏸️|⏹️|⏺️|Ⓜ️|▪️|▫️|▶️|◀️|◻️|◼️|☀️|☁️|☂️|☃️|☄️|☎️|☑️|☘️|☝️|☠️|☢️|☣️|☦️|☪️|☮️|☯️|☸️|☹️|☺️|♀️|♂️|♟️|♠️|♣️|♥️|♦️|♨️|♻️|♾️|⚒️|⚔️|⚕️|⚖️|⚗️|⚙️|⚛️|⚜️|⚠️|⚧️|⚰️|⚱️|⛈️|⛏️|⛑️|⛓️|⛩️|⛰️|⛱️|⛴️|⛷️|⛸️|⛹️|✂️|✈️|✉️|✌️|✍️|✏️|✒️|✔️|✖️|✝️|✡️|✳️|✴️|❄️|❇️|❣️|❤️|➡️|⤴️|⤵️|⬅️|⬆️|⬇️|〰️|〽️|㊗️|㊙️",
	chars: "\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D7}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA88}\\u{1FA90}-\\u{1FABD}\\u{1FABF}-\\u{1FAC5}\\u{1FACE}-\\u{1FADB}\\u{1FAE0}-\\u{1FAE8}\\u{1FAF0}-\\u{1FAF8}"
};

const unicodeSetFixtures = [
	{
		pattern: '[[a-h]&&[f-z]]',
		expected: '[f-h]'
	},
	{
		pattern: '[[a-h]&&[f-z]&&[p-z]]',
		expected: '[]'
	},
	{
		pattern: '[[a-h]&&[b]]',
		expected: 'b'
	},
	{
		pattern: '[[a-h]&&b]',
		expected: 'b'
	},
	{
		pattern: '[[g-z]&&b]',
		expected: '[]'
	},
	{
		pattern: '[[a-h]&&[^f-z]]',
		expected: '[a-e]'
	},
	{
		pattern: '[[a-h]&&[^f-z]&&[p-z]]',
		expected: '[]'
	},
	{
		pattern: '[[a-h]&&[^f-z]&&[^p-z]]',
		expected: '[a-e]'
	},
	{
		pattern: '[[a-h]&&[^b]]',
		expected: '[ac-h]'
	},
	{
		pattern: '[[a-h]--[f-z]]',
		expected: '[a-e]'
	},
	{
		pattern: '[[a-h]--[f-z]--[p-z]]',
		expected: '[a-e]'
	},
	{
		pattern: '[[a-z]--[d-k]--[s-w]]',
		expected: '[a-cl-rx-z]'
	},
	{
		pattern: '[[a-h]--[b]]',
		expected: '[ac-h]'
	},
	{
		pattern: '[[b]--[a-h]]',
		expected: '[]'
	},
	{
		pattern: '[[a-h]--b]',
		expected: '[ac-h]'
	},
	{
		pattern: '[b--[a-h]]',
		expected: '[]'
	},
	{
		pattern: '[[g-z]--b]',
		expected: '[g-z]'
	},
	{
		pattern: '[b--[g-z]]',
		expected: 'b'
	},
	{
		pattern: '[[a-h]--[^f-z]]',
		expected: '[f-h]'
	},
	{
		pattern: '[[a-h]--[^f-z]--[p-z]]',
		expected: '[f-h]'
	},
	{
		pattern: '[[a-h]--[^f-z]--[^p-z]]',
		expected: '[]'
	},
	{
		pattern: '[[a-h]--[^b]]',
		expected: 'b'
	},
	{
		pattern: '[[a-z][f-h]]',
		expected: '[a-z]'
	},
	{
		pattern: '[^[a-z][f-h]]',
		expected: '[^a-z]'
	},
	{
		pattern: '[^[a-z][f-h]]',
		matches: ["A", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["a", "z"],
		expected: '(?:[\\0-`\\{-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: TRANSFORM_U
	},
	{
		pattern: '[[^a-z][f-h]]',
		matches: ["f", "A", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["a", "z"],
		expected: '[\\0-`f-h\\{-\\u{10FFFF}]'
	},
	{
		pattern: '[[^a-z][f-h]]',
		matches: ["f", "A", "\u{12345}", "\uDAAA", "\uDDDD"],
		nonMatches: ["a", "z"],
		expected: '(?:[\\0-`f-h\\{-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF])',
		options: TRANSFORM_U
	},
	{
		pattern: '[\\q{A|AB|B|ABC|BC}ab]',
		expected: '(?:ABC|AB|BC|[ABab])'
	},
	{
		pattern: '[\\q{A|AB}a\\q{B|ABC|BC}b]',
		expected: '(?:ABC|AB|BC|[ABab])'
	},
	{
		pattern: '[\\q{A|AB}ab\\q{B|ABC|BC}]',
		expected: '(?:ABC|AB|BC|[ABab])'
	},
	{
		pattern: '[[\\q{A|AB}a]b\\q{B|ABC|BC}]',
		expected: '(?:ABC|AB|BC|[ABab])'
	},
	{
		pattern: '[\\q{👩🏿‍✈️|🚲|🇧🇪}]',
		expected: '(?:👩🏿‍✈️|🇧🇪|\\u{1F6B2})'
	},
	{
		pattern: '[ab\\q{}]',
		expected: '(?:[ab]|)'
	},
	{
		pattern: '[ab\\q{|}]',
		expected: '(?:[ab]|)'
	},
	{
		pattern: '[ab\\q{|A|AB}]',
		expected: '(?:AB|[Aab]|)'
	},
	{
		pattern: '[\\q{sA}asb]',
		flags: 'iv',
		expected: '(?:sA|[abs])'
	},
	{
		pattern: '[\\q{sA}asb]',
		flags: 'iv',
		options: TRANSFORM_U,
		expected: '(?:[s\\u017F]A|[abs\\u017F])'
	},
	{
		pattern: '[[ab\\q{cd}]--a]',
		expected: '(?:cd|b)'
	},
	{
		pattern: '[[ab\\q{cd}]--[ab]]',
		expected: '(?:cd)'
	},
	{
		pattern: '[[ab\\q{cd}]--[cd]]',
		expected: '(?:cd|[ab])'
	},
	{
		pattern: '[[ab\\q{cd}]--\\q{cd}]',
		expected: '[ab]'
	},
	{
		pattern: '[[ab\\q{cd}]--[a\\q{cd}]]',
		expected: 'b'
	},
	{
		pattern: '[[ab\\q{cd}]--[ab\\q{cd}]]',
		expected: '[]'
	},
	{
		pattern: '[[ab]--[ab\\q{cd}]]',
		expected: '[]'
	},
	{
		pattern: '[\\q{cd}--[ab\\q{cd}]]',
		expected: '[]'
	},
	{
		pattern: '[\\q{cd}--[ab\\q{dc}]]',
		expected: '(?:cd)'
	},
	{
		pattern: '[\\q{ab|cd|abc}--\\q{abc|cd}]',
		expected: '(?:ab)'
	},
	{
		pattern: '[\\q{ab|cd|abc}--\\q{abc}--\\q{cd}]',
		expected: '(?:ab)'
	},
	{
		pattern: '[a&&\\q{a}]',
		expected: 'a'
	},
	{
		pattern: '[a&&\\q{ab}]',
		expected: '[]'
	},
	{
		pattern: '[\\q{ab}&&\\q{ab}]',
		expected: '(?:ab)'
	},
	{
		pattern: '[\\q{ab|cd|abc}&&\\q{ab|bc|abc}]',
		expected: '(?:abc|ab)'
	},
	{
		pattern: '[[a\\q{ab}]&&\\q{ab}]',
		expected: '(?:ab)'
	},
	{
		pattern: '[[a\\q{ab}]&&a]',
		expected: 'a'
	},
	{
		pattern: '[^\\q{a}]',
		expected: '[^a]'
	},
	{
		pattern: '[^\\q{abc}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{a|}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{}--\\q{}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{ab}--\\q{ab}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{a}--\\q{ab}]',
		expected: '[^a]'
	},
	{
		pattern: '[^[\\q{ab}--\\q{ab}]]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{}&&a]',
		expected: '[^]'
	},
	{
		pattern: '[^\\q{ab}&&a]',
		expected: '[^]'
	},
	{
		pattern: '[^\\q{}&&\\q{}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{ab}&&\\q{ab}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '[^\\q{}&&\\q{ab}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '\\p{Basic_Emoji}',
		expected: `(?:${Basic_Emoji.all})`
	},
	{
		pattern: '[\\p{Basic_Emoji}]',
		expected: `(?:${Basic_Emoji.all})`
	},
	{
		pattern: '[\\p{Basic_Emoji}&&\\p{Basic_Emoji}]',
		expected: `(?:${Basic_Emoji.all})`
	},
	{
		pattern: '[\\p{Basic_Emoji}&&[\\u{0}-\\u{10ffff}]]',
		expected: `[${Basic_Emoji.chars}]`
	},
	{
		pattern: '[\\p{Basic_Emoji}\\p{Emoji}]',
		expected: `(?:${Basic_Emoji.strings}|[#\\*0-9\\xA9\\xAE\\u203C\\u2049\\u2122\\u2139\\u2194-\\u2199\\u21A9\\u21AA\\u231A\\u231B\\u2328\\u23CF\\u23E9-\\u23F3\\u23F8-\\u23FA\\u24C2\\u25AA\\u25AB\\u25B6\\u25C0\\u25FB-\\u25FE\\u2600-\\u2604\\u260E\\u2611\\u2614\\u2615\\u2618\\u261D\\u2620\\u2622\\u2623\\u2626\\u262A\\u262E\\u262F\\u2638-\\u263A\\u2640\\u2642\\u2648-\\u2653\\u265F\\u2660\\u2663\\u2665\\u2666\\u2668\\u267B\\u267E\\u267F\\u2692-\\u2697\\u2699\\u269B\\u269C\\u26A0\\u26A1\\u26A7\\u26AA\\u26AB\\u26B0\\u26B1\\u26BD\\u26BE\\u26C4\\u26C5\\u26C8\\u26CE\\u26CF\\u26D1\\u26D3\\u26D4\\u26E9\\u26EA\\u26F0-\\u26F5\\u26F7-\\u26FA\\u26FD\\u2702\\u2705\\u2708-\\u270D\\u270F\\u2712\\u2714\\u2716\\u271D\\u2721\\u2728\\u2733\\u2734\\u2744\\u2747\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2763\\u2764\\u2795-\\u2797\\u27A1\\u27B0\\u27BF\\u2934\\u2935\\u2B05-\\u2B07\\u2B1B\\u2B1C\\u2B50\\u2B55\\u3030\\u303D\\u3297\\u3299\\u{1F004}\\u{1F0CF}\\u{1F170}\\u{1F171}\\u{1F17E}\\u{1F17F}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F1E6}-\\u{1F1FF}\\u{1F201}\\u{1F202}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F23A}\\u{1F250}\\u{1F251}\\u{1F300}-\\u{1F321}\\u{1F324}-\\u{1F393}\\u{1F396}\\u{1F397}\\u{1F399}-\\u{1F39B}\\u{1F39E}-\\u{1F3F0}\\u{1F3F3}-\\u{1F3F5}\\u{1F3F7}-\\u{1F4FD}\\u{1F4FF}-\\u{1F53D}\\u{1F549}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F56F}\\u{1F570}\\u{1F573}-\\u{1F57A}\\u{1F587}\\u{1F58A}-\\u{1F58D}\\u{1F590}\\u{1F595}\\u{1F596}\\u{1F5A4}\\u{1F5A5}\\u{1F5A8}\\u{1F5B1}\\u{1F5B2}\\u{1F5BC}\\u{1F5C2}-\\u{1F5C4}\\u{1F5D1}-\\u{1F5D3}\\u{1F5DC}-\\u{1F5DE}\\u{1F5E1}\\u{1F5E3}\\u{1F5E8}\\u{1F5EF}\\u{1F5F3}\\u{1F5FA}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CB}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D7}\\u{1F6DC}-\\u{1F6E5}\\u{1F6E9}\\u{1F6EB}\\u{1F6EC}\\u{1F6F0}\\u{1F6F3}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA88}\\u{1FA90}-\\u{1FABD}\\u{1FABF}-\\u{1FAC5}\\u{1FACE}-\\u{1FADB}\\u{1FAE0}-\\u{1FAE8}\\u{1FAF0}-\\u{1FAF8}])`
	},
	{
		pattern: '[\\p{Basic_Emoji}&&\\q{🇮🇴|dog}]',
		expected: '[]'
	},
	{
		pattern: '[\\p{RGI_Emoji_Flag_Sequence}&&\\q{🇮🇴|dog}]',
		expected: '🇮🇴'
	},
	{
		pattern: '[\\p{Basic_Emoji}\\q{JavaScript|ECMAScript}]',
		expected: `(?:JavaScript|ECMAScript|${Basic_Emoji.all})`
	},
	{
		pattern: '[\\p{Basic_Emoji}&&\\q{😷|©️|dog}]',
		expected: '(?:©️|\\u{1F637})'
	},
	{
		pattern: '\\P{Basic_Emoji}',
		throws: /Cannot negate Unicode property of strings/
	},
	{
		pattern: '[^\\p{Basic_Emoji}]',
		throws: /Cannot negate set containing strings/
	},
	{
		pattern: '\\p{RGI_Emoji}',
		// keycaps like *️⃣ give problems
		expected: '(?:👨🏻‍❤️‍💋‍👨🏻|👨🏻‍❤️‍💋‍👨🏼|👨🏻‍❤️‍💋‍👨🏽|👨🏻‍❤️‍💋‍👨🏾|👨🏻‍❤️‍💋‍👨🏿|👨🏼‍❤️‍💋‍👨🏻|👨🏼‍❤️‍💋‍👨🏼|👨🏼‍❤️‍💋‍👨🏽|👨🏼‍❤️‍💋‍👨🏾|👨🏼‍❤️‍💋‍👨🏿|👨🏽‍❤️‍💋‍👨🏻|👨🏽‍❤️‍💋‍👨🏼|👨🏽‍❤️‍💋‍👨🏽|👨🏽‍❤️‍💋‍👨🏾|👨🏽‍❤️‍💋‍👨🏿|👨🏾‍❤️‍💋‍👨🏻|👨🏾‍❤️‍💋‍👨🏼|👨🏾‍❤️‍💋‍👨🏽|👨🏾‍❤️‍💋‍👨🏾|👨🏾‍❤️‍💋‍👨🏿|👨🏿‍❤️‍💋‍👨🏻|👨🏿‍❤️‍💋‍👨🏼|👨🏿‍❤️‍💋‍👨🏽|👨🏿‍❤️‍💋‍👨🏾|👨🏿‍❤️‍💋‍👨🏿|👩🏻‍❤️‍💋‍👨🏻|👩🏻‍❤️‍💋‍👨🏼|👩🏻‍❤️‍💋‍👨🏽|👩🏻‍❤️‍💋‍👨🏾|👩🏻‍❤️‍💋‍👨🏿|👩🏻‍❤️‍💋‍👩🏻|👩🏻‍❤️‍💋‍👩🏼|👩🏻‍❤️‍💋‍👩🏽|👩🏻‍❤️‍💋‍👩🏾|👩🏻‍❤️‍💋‍👩🏿|👩🏼‍❤️‍💋‍👨🏻|👩🏼‍❤️‍💋‍👨🏼|👩🏼‍❤️‍💋‍👨🏽|👩🏼‍❤️‍💋‍👨🏾|👩🏼‍❤️‍💋‍👨🏿|👩🏼‍❤️‍💋‍👩🏻|👩🏼‍❤️‍💋‍👩🏼|👩🏼‍❤️‍💋‍👩🏽|👩🏼‍❤️‍💋‍👩🏾|👩🏼‍❤️‍💋‍👩🏿|👩🏽‍❤️‍💋‍👨🏻|👩🏽‍❤️‍💋‍👨🏼|👩🏽‍❤️‍💋‍👨🏽|👩🏽‍❤️‍💋‍👨🏾|👩🏽‍❤️‍💋‍👨🏿|👩🏽‍❤️‍💋‍👩🏻|👩🏽‍❤️‍💋‍👩🏼|👩🏽‍❤️‍💋‍👩🏽|👩🏽‍❤️‍💋‍👩🏾|👩🏽‍❤️‍💋‍👩🏿|👩🏾‍❤️‍💋‍👨🏻|👩🏾‍❤️‍💋‍👨🏼|👩🏾‍❤️‍💋‍👨🏽|👩🏾‍❤️‍💋‍👨🏾|👩🏾‍❤️‍💋‍👨🏿|👩🏾‍❤️‍💋‍👩🏻|👩🏾‍❤️‍💋‍👩🏼|👩🏾‍❤️‍💋‍👩🏽|👩🏾‍❤️‍💋‍👩🏾|👩🏾‍❤️‍💋‍👩🏿|👩🏿‍❤️‍💋‍👨🏻|👩🏿‍❤️‍💋‍👨🏼|👩🏿‍❤️‍💋‍👨🏽|👩🏿‍❤️‍💋‍👨🏾|👩🏿‍❤️‍💋‍👨🏿|👩🏿‍❤️‍💋‍👩🏻|👩🏿‍❤️‍💋‍👩🏼|👩🏿‍❤️‍💋‍👩🏽|👩🏿‍❤️‍💋‍👩🏾|👩🏿‍❤️‍💋‍👩🏿|🧑🏻‍❤️‍💋‍🧑🏼|🧑🏻‍❤️‍💋‍🧑🏽|🧑🏻‍❤️‍💋‍🧑🏾|🧑🏻‍❤️‍💋‍🧑🏿|🧑🏼‍❤️‍💋‍🧑🏻|🧑🏼‍❤️‍💋‍🧑🏽|🧑🏼‍❤️‍💋‍🧑🏾|🧑🏼‍❤️‍💋‍🧑🏿|🧑🏽‍❤️‍💋‍🧑🏻|🧑🏽‍❤️‍💋‍🧑🏼|🧑🏽‍❤️‍💋‍🧑🏾|🧑🏽‍❤️‍💋‍🧑🏿|🧑🏾‍❤️‍💋‍🧑🏻|🧑🏾‍❤️‍💋‍🧑🏼|🧑🏾‍❤️‍💋‍🧑🏽|🧑🏾‍❤️‍💋‍🧑🏿|🧑🏿‍❤️‍💋‍🧑🏻|🧑🏿‍❤️‍💋‍🧑🏼|🧑🏿‍❤️‍💋‍🧑🏽|🧑🏿‍❤️‍💋‍🧑🏾|🏴󠁧󠁢󠁥󠁮󠁧󠁿|🏴󠁧󠁢󠁳󠁣󠁴󠁿|🏴󠁧󠁢󠁷󠁬󠁳󠁿|👨🏻‍❤️‍👨🏻|👨🏻‍❤️‍👨🏼|👨🏻‍❤️‍👨🏽|👨🏻‍❤️‍👨🏾|👨🏻‍❤️‍👨🏿|👨🏻‍🤝‍👨🏼|👨🏻‍🤝‍👨🏽|👨🏻‍🤝‍👨🏾|👨🏻‍🤝‍👨🏿|👨🏼‍❤️‍👨🏻|👨🏼‍❤️‍👨🏼|👨🏼‍❤️‍👨🏽|👨🏼‍❤️‍👨🏾|👨🏼‍❤️‍👨🏿|👨🏼‍🤝‍👨🏻|👨🏼‍🤝‍👨🏽|👨🏼‍🤝‍👨🏾|👨🏼‍🤝‍👨🏿|👨🏽‍❤️‍👨🏻|👨🏽‍❤️‍👨🏼|👨🏽‍❤️‍👨🏽|👨🏽‍❤️‍👨🏾|👨🏽‍❤️‍👨🏿|👨🏽‍🤝‍👨🏻|👨🏽‍🤝‍👨🏼|👨🏽‍🤝‍👨🏾|👨🏽‍🤝‍👨🏿|👨🏾‍❤️‍👨🏻|👨🏾‍❤️‍👨🏼|👨🏾‍❤️‍👨🏽|👨🏾‍❤️‍👨🏾|👨🏾‍❤️‍👨🏿|👨🏾‍🤝‍👨🏻|👨🏾‍🤝‍👨🏼|👨🏾‍🤝‍👨🏽|👨🏾‍🤝‍👨🏿|👨🏿‍❤️‍👨🏻|👨🏿‍❤️‍👨🏼|👨🏿‍❤️‍👨🏽|👨🏿‍❤️‍👨🏾|👨🏿‍❤️‍👨🏿|👨🏿‍🤝‍👨🏻|👨🏿‍🤝‍👨🏼|👨🏿‍🤝‍👨🏽|👨🏿‍🤝‍👨🏾|👩🏻‍❤️‍👨🏻|👩🏻‍❤️‍👨🏼|👩🏻‍❤️‍👨🏽|👩🏻‍❤️‍👨🏾|👩🏻‍❤️‍👨🏿|👩🏻‍❤️‍👩🏻|👩🏻‍❤️‍👩🏼|👩🏻‍❤️‍👩🏽|👩🏻‍❤️‍👩🏾|👩🏻‍❤️‍👩🏿|👩🏻‍🤝‍👨🏼|👩🏻‍🤝‍👨🏽|👩🏻‍🤝‍👨🏾|👩🏻‍🤝‍👨🏿|👩🏻‍🤝‍👩🏼|👩🏻‍🤝‍👩🏽|👩🏻‍🤝‍👩🏾|👩🏻‍🤝‍👩🏿|👩🏼‍❤️‍👨🏻|👩🏼‍❤️‍👨🏼|👩🏼‍❤️‍👨🏽|👩🏼‍❤️‍👨🏾|👩🏼‍❤️‍👨🏿|👩🏼‍❤️‍👩🏻|👩🏼‍❤️‍👩🏼|👩🏼‍❤️‍👩🏽|👩🏼‍❤️‍👩🏾|👩🏼‍❤️‍👩🏿|👩🏼‍🤝‍👨🏻|👩🏼‍🤝‍👨🏽|👩🏼‍🤝‍👨🏾|👩🏼‍🤝‍👨🏿|👩🏼‍🤝‍👩🏻|👩🏼‍🤝‍👩🏽|👩🏼‍🤝‍👩🏾|👩🏼‍🤝‍👩🏿|👩🏽‍❤️‍👨🏻|👩🏽‍❤️‍👨🏼|👩🏽‍❤️‍👨🏽|👩🏽‍❤️‍👨🏾|👩🏽‍❤️‍👨🏿|👩🏽‍❤️‍👩🏻|👩🏽‍❤️‍👩🏼|👩🏽‍❤️‍👩🏽|👩🏽‍❤️‍👩🏾|👩🏽‍❤️‍👩🏿|👩🏽‍🤝‍👨🏻|👩🏽‍🤝‍👨🏼|👩🏽‍🤝‍👨🏾|👩🏽‍🤝‍👨🏿|👩🏽‍🤝‍👩🏻|👩🏽‍🤝‍👩🏼|👩🏽‍🤝‍👩🏾|👩🏽‍🤝‍👩🏿|👩🏾‍❤️‍👨🏻|👩🏾‍❤️‍👨🏼|👩🏾‍❤️‍👨🏽|👩🏾‍❤️‍👨🏾|👩🏾‍❤️‍👨🏿|👩🏾‍❤️‍👩🏻|👩🏾‍❤️‍👩🏼|👩🏾‍❤️‍👩🏽|👩🏾‍❤️‍👩🏾|👩🏾‍❤️‍👩🏿|👩🏾‍🤝‍👨🏻|👩🏾‍🤝‍👨🏼|👩🏾‍🤝‍👨🏽|👩🏾‍🤝‍👨🏿|👩🏾‍🤝‍👩🏻|👩🏾‍🤝‍👩🏼|👩🏾‍🤝‍👩🏽|👩🏾‍🤝‍👩🏿|👩🏿‍❤️‍👨🏻|👩🏿‍❤️‍👨🏼|👩🏿‍❤️‍👨🏽|👩🏿‍❤️‍👨🏾|👩🏿‍❤️‍👨🏿|👩🏿‍❤️‍👩🏻|👩🏿‍❤️‍👩🏼|👩🏿‍❤️‍👩🏽|👩🏿‍❤️‍👩🏾|👩🏿‍❤️‍👩🏿|👩🏿‍🤝‍👨🏻|👩🏿‍🤝‍👨🏼|👩🏿‍🤝‍👨🏽|👩🏿‍🤝‍👨🏾|👩🏿‍🤝‍👩🏻|👩🏿‍🤝‍👩🏼|👩🏿‍🤝‍👩🏽|👩🏿‍🤝‍👩🏾|🧑🏻‍❤️‍🧑🏼|🧑🏻‍❤️‍🧑🏽|🧑🏻‍❤️‍🧑🏾|🧑🏻‍❤️‍🧑🏿|🧑🏻‍🤝‍🧑🏻|🧑🏻‍🤝‍🧑🏼|🧑🏻‍🤝‍🧑🏽|🧑🏻‍🤝‍🧑🏾|🧑🏻‍🤝‍🧑🏿|🧑🏼‍❤️‍🧑🏻|🧑🏼‍❤️‍🧑🏽|🧑🏼‍❤️‍🧑🏾|🧑🏼‍❤️‍🧑🏿|🧑🏼‍🤝‍🧑🏻|🧑🏼‍🤝‍🧑🏼|🧑🏼‍🤝‍🧑🏽|🧑🏼‍🤝‍🧑🏾|🧑🏼‍🤝‍🧑🏿|🧑🏽‍❤️‍🧑🏻|🧑🏽‍❤️‍🧑🏼|🧑🏽‍❤️‍🧑🏾|🧑🏽‍❤️‍🧑🏿|🧑🏽‍🤝‍🧑🏻|🧑🏽‍🤝‍🧑🏼|🧑🏽‍🤝‍🧑🏽|🧑🏽‍🤝‍🧑🏾|🧑🏽‍🤝‍🧑🏿|🧑🏾‍❤️‍🧑🏻|🧑🏾‍❤️‍🧑🏼|🧑🏾‍❤️‍🧑🏽|🧑🏾‍❤️‍🧑🏿|🧑🏾‍🤝‍🧑🏻|🧑🏾‍🤝‍🧑🏼|🧑🏾‍🤝‍🧑🏽|🧑🏾‍🤝‍🧑🏾|🧑🏾‍🤝‍🧑🏿|🧑🏿‍❤️‍🧑🏻|🧑🏿‍❤️‍🧑🏼|🧑🏿‍❤️‍🧑🏽|🧑🏿‍❤️‍🧑🏾|🧑🏿‍🤝‍🧑🏻|🧑🏿‍🤝‍🧑🏼|🧑🏿‍🤝‍🧑🏽|🧑🏿‍🤝‍🧑🏾|🧑🏿‍🤝‍🧑🏿|👨‍❤️‍💋‍👨|👨‍👨‍👦‍👦|👨‍👨‍👧‍👦|👨‍👨‍👧‍👧|👨‍👩‍👦‍👦|👨‍👩‍👧‍👦|👨‍👩‍👧‍👧|👩‍❤️‍💋‍👨|👩‍❤️‍💋‍👩|👩‍👩‍👦‍👦|👩‍👩‍👧‍👦|👩‍👩‍👧‍👧|🧑‍🧑‍🧒‍🧒|🏃🏻‍♀️‍➡️|🏃🏻‍♂️‍➡️|🏃🏼‍♀️‍➡️|🏃🏼‍♂️‍➡️|🏃🏽‍♀️‍➡️|🏃🏽‍♂️‍➡️|🏃🏾‍♀️‍➡️|🏃🏾‍♂️‍➡️|🏃🏿‍♀️‍➡️|🏃🏿‍♂️‍➡️|👨🏻‍🦯‍➡️|👨🏻‍🦼‍➡️|👨🏻‍🦽‍➡️|👨🏼‍🦯‍➡️|👨🏼‍🦼‍➡️|👨🏼‍🦽‍➡️|👨🏽‍🦯‍➡️|👨🏽‍🦼‍➡️|👨🏽‍🦽‍➡️|👨🏾‍🦯‍➡️|👨🏾‍🦼‍➡️|👨🏾‍🦽‍➡️|👨🏿‍🦯‍➡️|👨🏿‍🦼‍➡️|👨🏿‍🦽‍➡️|👩🏻‍🦯‍➡️|👩🏻‍🦼‍➡️|👩🏻‍🦽‍➡️|👩🏼‍🦯‍➡️|👩🏼‍🦼‍➡️|👩🏼‍🦽‍➡️|👩🏽‍🦯‍➡️|👩🏽‍🦼‍➡️|👩🏽‍🦽‍➡️|👩🏾‍🦯‍➡️|👩🏾‍🦼‍➡️|👩🏾‍🦽‍➡️|👩🏿‍🦯‍➡️|👩🏿‍🦼‍➡️|👩🏿‍🦽‍➡️|🚶🏻‍♀️‍➡️|🚶🏻‍♂️‍➡️|🚶🏼‍♀️‍➡️|🚶🏼‍♂️‍➡️|🚶🏽‍♀️‍➡️|🚶🏽‍♂️‍➡️|🚶🏾‍♀️‍➡️|🚶🏾‍♂️‍➡️|🚶🏿‍♀️‍➡️|🚶🏿‍♂️‍➡️|🧎🏻‍♀️‍➡️|🧎🏻‍♂️‍➡️|🧎🏼‍♀️‍➡️|🧎🏼‍♂️‍➡️|🧎🏽‍♀️‍➡️|🧎🏽‍♂️‍➡️|🧎🏾‍♀️‍➡️|🧎🏾‍♂️‍➡️|🧎🏿‍♀️‍➡️|🧎🏿‍♂️‍➡️|🧑🏻‍🦯‍➡️|🧑🏻‍🦼‍➡️|🧑🏻‍🦽‍➡️|🧑🏼‍🦯‍➡️|🧑🏼‍🦼‍➡️|🧑🏼‍🦽‍➡️|🧑🏽‍🦯‍➡️|🧑🏽‍🦼‍➡️|🧑🏽‍🦽‍➡️|🧑🏾‍🦯‍➡️|🧑🏾‍🦼‍➡️|🧑🏾‍🦽‍➡️|🧑🏿‍🦯‍➡️|🧑🏿‍🦼‍➡️|🧑🏿‍🦽‍➡️|🫱🏻‍🫲🏼|🫱🏻‍🫲🏽|🫱🏻‍🫲🏾|🫱🏻‍🫲🏿|🫱🏼‍🫲🏻|🫱🏼‍🫲🏽|🫱🏼‍🫲🏾|🫱🏼‍🫲🏿|🫱🏽‍🫲🏻|🫱🏽‍🫲🏼|🫱🏽‍🫲🏾|🫱🏽‍🫲🏿|🫱🏾‍🫲🏻|🫱🏾‍🫲🏼|🫱🏾‍🫲🏽|🫱🏾‍🫲🏿|🫱🏿‍🫲🏻|🫱🏿‍🫲🏼|🫱🏿‍🫲🏽|🫱🏿‍🫲🏾|🏃‍♀️‍➡️|🏃‍♂️‍➡️|👨‍❤️‍👨|👨‍👦‍👦|👨‍👧‍👦|👨‍👧‍👧|👨‍👨‍👦|👨‍👨‍👧|👨‍👩‍👦|👨‍👩‍👧|👨‍🦯‍➡️|👨‍🦼‍➡️|👨‍🦽‍➡️|👩‍❤️‍👨|👩‍❤️‍👩|👩‍👦‍👦|👩‍👧‍👦|👩‍👧‍👧|👩‍👩‍👦|👩‍👩‍👧|👩‍🦯‍➡️|👩‍🦼‍➡️|👩‍🦽‍➡️|🚶‍♀️‍➡️|🚶‍♂️‍➡️|🧎‍♀️‍➡️|🧎‍♂️‍➡️|🧑‍🤝‍🧑|🧑‍🦯‍➡️|🧑‍🦼‍➡️|🧑‍🦽‍➡️|🧑‍🧑‍🧒|🧑‍🧒‍🧒|🏃🏻‍♀️|🏃🏻‍♂️|🏃🏻‍➡️|🏃🏼‍♀️|🏃🏼‍♂️|🏃🏼‍➡️|🏃🏽‍♀️|🏃🏽‍♂️|🏃🏽‍➡️|🏃🏾‍♀️|🏃🏾‍♂️|🏃🏾‍➡️|🏃🏿‍♀️|🏃🏿‍♂️|🏃🏿‍➡️|🏄🏻‍♀️|🏄🏻‍♂️|🏄🏼‍♀️|🏄🏼‍♂️|🏄🏽‍♀️|🏄🏽‍♂️|🏄🏾‍♀️|🏄🏾‍♂️|🏄🏿‍♀️|🏄🏿‍♂️|🏊🏻‍♀️|🏊🏻‍♂️|🏊🏼‍♀️|🏊🏼‍♂️|🏊🏽‍♀️|🏊🏽‍♂️|🏊🏾‍♀️|🏊🏾‍♂️|🏊🏿‍♀️|🏊🏿‍♂️|🏋🏻‍♀️|🏋🏻‍♂️|🏋🏼‍♀️|🏋🏼‍♂️|🏋🏽‍♀️|🏋🏽‍♂️|🏋🏾‍♀️|🏋🏾‍♂️|🏋🏿‍♀️|🏋🏿‍♂️|🏌🏻‍♀️|🏌🏻‍♂️|🏌🏼‍♀️|🏌🏼‍♂️|🏌🏽‍♀️|🏌🏽‍♂️|🏌🏾‍♀️|🏌🏾‍♂️|🏌🏿‍♀️|🏌🏿‍♂️|👁️‍🗨️|👨🏻‍⚕️|👨🏻‍⚖️|👨🏻‍✈️|👨🏻‍🌾|👨🏻‍🍳|👨🏻‍🍼|👨🏻‍🎓|👨🏻‍🎤|👨🏻‍🎨|👨🏻‍🏫|👨🏻‍🏭|👨🏻‍💻|👨🏻‍💼|👨🏻‍🔧|👨🏻‍🔬|👨🏻‍🚀|👨🏻‍🚒|👨🏻‍🦯|👨🏻‍🦰|👨🏻‍🦱|👨🏻‍🦲|👨🏻‍🦳|👨🏻‍🦼|👨🏻‍🦽|👨🏼‍⚕️|👨🏼‍⚖️|👨🏼‍✈️|👨🏼‍🌾|👨🏼‍🍳|👨🏼‍🍼|👨🏼‍🎓|👨🏼‍🎤|👨🏼‍🎨|👨🏼‍🏫|👨🏼‍🏭|👨🏼‍💻|👨🏼‍💼|👨🏼‍🔧|👨🏼‍🔬|👨🏼‍🚀|👨🏼‍🚒|👨🏼‍🦯|👨🏼‍🦰|👨🏼‍🦱|👨🏼‍🦲|👨🏼‍🦳|👨🏼‍🦼|👨🏼‍🦽|👨🏽‍⚕️|👨🏽‍⚖️|👨🏽‍✈️|👨🏽‍🌾|👨🏽‍🍳|👨🏽‍🍼|👨🏽‍🎓|👨🏽‍🎤|👨🏽‍🎨|👨🏽‍🏫|👨🏽‍🏭|👨🏽‍💻|👨🏽‍💼|👨🏽‍🔧|👨🏽‍🔬|👨🏽‍🚀|👨🏽‍🚒|👨🏽‍🦯|👨🏽‍🦰|👨🏽‍🦱|👨🏽‍🦲|👨🏽‍🦳|👨🏽‍🦼|👨🏽‍🦽|👨🏾‍⚕️|👨🏾‍⚖️|👨🏾‍✈️|👨🏾‍🌾|👨🏾‍🍳|👨🏾‍🍼|👨🏾‍🎓|👨🏾‍🎤|👨🏾‍🎨|👨🏾‍🏫|👨🏾‍🏭|👨🏾‍💻|👨🏾‍💼|👨🏾‍🔧|👨🏾‍🔬|👨🏾‍🚀|👨🏾‍🚒|👨🏾‍🦯|👨🏾‍🦰|👨🏾‍🦱|👨🏾‍🦲|👨🏾‍🦳|👨🏾‍🦼|👨🏾‍🦽|👨🏿‍⚕️|👨🏿‍⚖️|👨🏿‍✈️|👨🏿‍🌾|👨🏿‍🍳|👨🏿‍🍼|👨🏿‍🎓|👨🏿‍🎤|👨🏿‍🎨|👨🏿‍🏫|👨🏿‍🏭|👨🏿‍💻|👨🏿‍💼|👨🏿‍🔧|👨🏿‍🔬|👨🏿‍🚀|👨🏿‍🚒|👨🏿‍🦯|👨🏿‍🦰|👨🏿‍🦱|👨🏿‍🦲|👨🏿‍🦳|👨🏿‍🦼|👨🏿‍🦽|👩🏻‍⚕️|👩🏻‍⚖️|👩🏻‍✈️|👩🏻‍🌾|👩🏻‍🍳|👩🏻‍🍼|👩🏻‍🎓|👩🏻‍🎤|👩🏻‍🎨|👩🏻‍🏫|👩🏻‍🏭|👩🏻‍💻|👩🏻‍💼|👩🏻‍🔧|👩🏻‍🔬|👩🏻‍🚀|👩🏻‍🚒|👩🏻‍🦯|👩🏻‍🦰|👩🏻‍🦱|👩🏻‍🦲|👩🏻‍🦳|👩🏻‍🦼|👩🏻‍🦽|👩🏼‍⚕️|👩🏼‍⚖️|👩🏼‍✈️|👩🏼‍🌾|👩🏼‍🍳|👩🏼‍🍼|👩🏼‍🎓|👩🏼‍🎤|👩🏼‍🎨|👩🏼‍🏫|👩🏼‍🏭|👩🏼‍💻|👩🏼‍💼|👩🏼‍🔧|👩🏼‍🔬|👩🏼‍🚀|👩🏼‍🚒|👩🏼‍🦯|👩🏼‍🦰|👩🏼‍🦱|👩🏼‍🦲|👩🏼‍🦳|👩🏼‍🦼|👩🏼‍🦽|👩🏽‍⚕️|👩🏽‍⚖️|👩🏽‍✈️|👩🏽‍🌾|👩🏽‍🍳|👩🏽‍🍼|👩🏽‍🎓|👩🏽‍🎤|👩🏽‍🎨|👩🏽‍🏫|👩🏽‍🏭|👩🏽‍💻|👩🏽‍💼|👩🏽‍🔧|👩🏽‍🔬|👩🏽‍🚀|👩🏽‍🚒|👩🏽‍🦯|👩🏽‍🦰|👩🏽‍🦱|👩🏽‍🦲|👩🏽‍🦳|👩🏽‍🦼|👩🏽‍🦽|👩🏾‍⚕️|👩🏾‍⚖️|👩🏾‍✈️|👩🏾‍🌾|👩🏾‍🍳|👩🏾‍🍼|👩🏾‍🎓|👩🏾‍🎤|👩🏾‍🎨|👩🏾‍🏫|👩🏾‍🏭|👩🏾‍💻|👩🏾‍💼|👩🏾‍🔧|👩🏾‍🔬|👩🏾‍🚀|👩🏾‍🚒|👩🏾‍🦯|👩🏾‍🦰|👩🏾‍🦱|👩🏾‍🦲|👩🏾‍🦳|👩🏾‍🦼|👩🏾‍🦽|👩🏿‍⚕️|👩🏿‍⚖️|👩🏿‍✈️|👩🏿‍🌾|👩🏿‍🍳|👩🏿‍🍼|👩🏿‍🎓|👩🏿‍🎤|👩🏿‍🎨|👩🏿‍🏫|👩🏿‍🏭|👩🏿‍💻|👩🏿‍💼|👩🏿‍🔧|👩🏿‍🔬|👩🏿‍🚀|👩🏿‍🚒|👩🏿‍🦯|👩🏿‍🦰|👩🏿‍🦱|👩🏿‍🦲|👩🏿‍🦳|👩🏿‍🦼|👩🏿‍🦽|👮🏻‍♀️|👮🏻‍♂️|👮🏼‍♀️|👮🏼‍♂️|👮🏽‍♀️|👮🏽‍♂️|👮🏾‍♀️|👮🏾‍♂️|👮🏿‍♀️|👮🏿‍♂️|👰🏻‍♀️|👰🏻‍♂️|👰🏼‍♀️|👰🏼‍♂️|👰🏽‍♀️|👰🏽‍♂️|👰🏾‍♀️|👰🏾‍♂️|👰🏿‍♀️|👰🏿‍♂️|👱🏻‍♀️|👱🏻‍♂️|👱🏼‍♀️|👱🏼‍♂️|👱🏽‍♀️|👱🏽‍♂️|👱🏾‍♀️|👱🏾‍♂️|👱🏿‍♀️|👱🏿‍♂️|👳🏻‍♀️|👳🏻‍♂️|👳🏼‍♀️|👳🏼‍♂️|👳🏽‍♀️|👳🏽‍♂️|👳🏾‍♀️|👳🏾‍♂️|👳🏿‍♀️|👳🏿‍♂️|👷🏻‍♀️|👷🏻‍♂️|👷🏼‍♀️|👷🏼‍♂️|👷🏽‍♀️|👷🏽‍♂️|👷🏾‍♀️|👷🏾‍♂️|👷🏿‍♀️|👷🏿‍♂️|💁🏻‍♀️|💁🏻‍♂️|💁🏼‍♀️|💁🏼‍♂️|💁🏽‍♀️|💁🏽‍♂️|💁🏾‍♀️|💁🏾‍♂️|💁🏿‍♀️|💁🏿‍♂️|💂🏻‍♀️|💂🏻‍♂️|💂🏼‍♀️|💂🏼‍♂️|💂🏽‍♀️|💂🏽‍♂️|💂🏾‍♀️|💂🏾‍♂️|💂🏿‍♀️|💂🏿‍♂️|💆🏻‍♀️|💆🏻‍♂️|💆🏼‍♀️|💆🏼‍♂️|💆🏽‍♀️|💆🏽‍♂️|💆🏾‍♀️|💆🏾‍♂️|💆🏿‍♀️|💆🏿‍♂️|💇🏻‍♀️|💇🏻‍♂️|💇🏼‍♀️|💇🏼‍♂️|💇🏽‍♀️|💇🏽‍♂️|💇🏾‍♀️|💇🏾‍♂️|💇🏿‍♀️|💇🏿‍♂️|🕵🏻‍♀️|🕵🏻‍♂️|🕵🏼‍♀️|🕵🏼‍♂️|🕵🏽‍♀️|🕵🏽‍♂️|🕵🏾‍♀️|🕵🏾‍♂️|🕵🏿‍♀️|🕵🏿‍♂️|🙅🏻‍♀️|🙅🏻‍♂️|🙅🏼‍♀️|🙅🏼‍♂️|🙅🏽‍♀️|🙅🏽‍♂️|🙅🏾‍♀️|🙅🏾‍♂️|🙅🏿‍♀️|🙅🏿‍♂️|🙆🏻‍♀️|🙆🏻‍♂️|🙆🏼‍♀️|🙆🏼‍♂️|🙆🏽‍♀️|🙆🏽‍♂️|🙆🏾‍♀️|🙆🏾‍♂️|🙆🏿‍♀️|🙆🏿‍♂️|🙇🏻‍♀️|🙇🏻‍♂️|🙇🏼‍♀️|🙇🏼‍♂️|🙇🏽‍♀️|🙇🏽‍♂️|🙇🏾‍♀️|🙇🏾‍♂️|🙇🏿‍♀️|🙇🏿‍♂️|🙋🏻‍♀️|🙋🏻‍♂️|🙋🏼‍♀️|🙋🏼‍♂️|🙋🏽‍♀️|🙋🏽‍♂️|🙋🏾‍♀️|🙋🏾‍♂️|🙋🏿‍♀️|🙋🏿‍♂️|🙍🏻‍♀️|🙍🏻‍♂️|🙍🏼‍♀️|🙍🏼‍♂️|🙍🏽‍♀️|🙍🏽‍♂️|🙍🏾‍♀️|🙍🏾‍♂️|🙍🏿‍♀️|🙍🏿‍♂️|🙎🏻‍♀️|🙎🏻‍♂️|🙎🏼‍♀️|🙎🏼‍♂️|🙎🏽‍♀️|🙎🏽‍♂️|🙎🏾‍♀️|🙎🏾‍♂️|🙎🏿‍♀️|🙎🏿‍♂️|🚣🏻‍♀️|🚣🏻‍♂️|🚣🏼‍♀️|🚣🏼‍♂️|🚣🏽‍♀️|🚣🏽‍♂️|🚣🏾‍♀️|🚣🏾‍♂️|🚣🏿‍♀️|🚣🏿‍♂️|🚴🏻‍♀️|🚴🏻‍♂️|🚴🏼‍♀️|🚴🏼‍♂️|🚴🏽‍♀️|🚴🏽‍♂️|🚴🏾‍♀️|🚴🏾‍♂️|🚴🏿‍♀️|🚴🏿‍♂️|🚵🏻‍♀️|🚵🏻‍♂️|🚵🏼‍♀️|🚵🏼‍♂️|🚵🏽‍♀️|🚵🏽‍♂️|🚵🏾‍♀️|🚵🏾‍♂️|🚵🏿‍♀️|🚵🏿‍♂️|🚶🏻‍♀️|🚶🏻‍♂️|🚶🏻‍➡️|🚶🏼‍♀️|🚶🏼‍♂️|🚶🏼‍➡️|🚶🏽‍♀️|🚶🏽‍♂️|🚶🏽‍➡️|🚶🏾‍♀️|🚶🏾‍♂️|🚶🏾‍➡️|🚶🏿‍♀️|🚶🏿‍♂️|🚶🏿‍➡️|🤦🏻‍♀️|🤦🏻‍♂️|🤦🏼‍♀️|🤦🏼‍♂️|🤦🏽‍♀️|🤦🏽‍♂️|🤦🏾‍♀️|🤦🏾‍♂️|🤦🏿‍♀️|🤦🏿‍♂️|🤵🏻‍♀️|🤵🏻‍♂️|🤵🏼‍♀️|🤵🏼‍♂️|🤵🏽‍♀️|🤵🏽‍♂️|🤵🏾‍♀️|🤵🏾‍♂️|🤵🏿‍♀️|🤵🏿‍♂️|🤷🏻‍♀️|🤷🏻‍♂️|🤷🏼‍♀️|🤷🏼‍♂️|🤷🏽‍♀️|🤷🏽‍♂️|🤷🏾‍♀️|🤷🏾‍♂️|🤷🏿‍♀️|🤷🏿‍♂️|🤸🏻‍♀️|🤸🏻‍♂️|🤸🏼‍♀️|🤸🏼‍♂️|🤸🏽‍♀️|🤸🏽‍♂️|🤸🏾‍♀️|🤸🏾‍♂️|🤸🏿‍♀️|🤸🏿‍♂️|🤹🏻‍♀️|🤹🏻‍♂️|🤹🏼‍♀️|🤹🏼‍♂️|🤹🏽‍♀️|🤹🏽‍♂️|🤹🏾‍♀️|🤹🏾‍♂️|🤹🏿‍♀️|🤹🏿‍♂️|🤽🏻‍♀️|🤽🏻‍♂️|🤽🏼‍♀️|🤽🏼‍♂️|🤽🏽‍♀️|🤽🏽‍♂️|🤽🏾‍♀️|🤽🏾‍♂️|🤽🏿‍♀️|🤽🏿‍♂️|🤾🏻‍♀️|🤾🏻‍♂️|🤾🏼‍♀️|🤾🏼‍♂️|🤾🏽‍♀️|🤾🏽‍♂️|🤾🏾‍♀️|🤾🏾‍♂️|🤾🏿‍♀️|🤾🏿‍♂️|🦸🏻‍♀️|🦸🏻‍♂️|🦸🏼‍♀️|🦸🏼‍♂️|🦸🏽‍♀️|🦸🏽‍♂️|🦸🏾‍♀️|🦸🏾‍♂️|🦸🏿‍♀️|🦸🏿‍♂️|🦹🏻‍♀️|🦹🏻‍♂️|🦹🏼‍♀️|🦹🏼‍♂️|🦹🏽‍♀️|🦹🏽‍♂️|🦹🏾‍♀️|🦹🏾‍♂️|🦹🏿‍♀️|🦹🏿‍♂️|🧍🏻‍♀️|🧍🏻‍♂️|🧍🏼‍♀️|🧍🏼‍♂️|🧍🏽‍♀️|🧍🏽‍♂️|🧍🏾‍♀️|🧍🏾‍♂️|🧍🏿‍♀️|🧍🏿‍♂️|🧎🏻‍♀️|🧎🏻‍♂️|🧎🏻‍➡️|🧎🏼‍♀️|🧎🏼‍♂️|🧎🏼‍➡️|🧎🏽‍♀️|🧎🏽‍♂️|🧎🏽‍➡️|🧎🏾‍♀️|🧎🏾‍♂️|🧎🏾‍➡️|🧎🏿‍♀️|🧎🏿‍♂️|🧎🏿‍➡️|🧏🏻‍♀️|🧏🏻‍♂️|🧏🏼‍♀️|🧏🏼‍♂️|🧏🏽‍♀️|🧏🏽‍♂️|🧏🏾‍♀️|🧏🏾‍♂️|🧏🏿‍♀️|🧏🏿‍♂️|🧑🏻‍⚕️|🧑🏻‍⚖️|🧑🏻‍✈️|🧑🏻‍🌾|🧑🏻‍🍳|🧑🏻‍🍼|🧑🏻‍🎄|🧑🏻‍🎓|🧑🏻‍🎤|🧑🏻‍🎨|🧑🏻‍🏫|🧑🏻‍🏭|🧑🏻‍💻|🧑🏻‍💼|🧑🏻‍🔧|🧑🏻‍🔬|🧑🏻‍🚀|🧑🏻‍🚒|🧑🏻‍🦯|🧑🏻‍🦰|🧑🏻‍🦱|🧑🏻‍🦲|🧑🏻‍🦳|🧑🏻‍🦼|🧑🏻‍🦽|🧑🏼‍⚕️|🧑🏼‍⚖️|🧑🏼‍✈️|🧑🏼‍🌾|🧑🏼‍🍳|🧑🏼‍🍼|🧑🏼‍🎄|🧑🏼‍🎓|🧑🏼‍🎤|🧑🏼‍🎨|🧑🏼‍🏫|🧑🏼‍🏭|🧑🏼‍💻|🧑🏼‍💼|🧑🏼‍🔧|🧑🏼‍🔬|🧑🏼‍🚀|🧑🏼‍🚒|🧑🏼‍🦯|🧑🏼‍🦰|🧑🏼‍🦱|🧑🏼‍🦲|🧑🏼‍🦳|🧑🏼‍🦼|🧑🏼‍🦽|🧑🏽‍⚕️|🧑🏽‍⚖️|🧑🏽‍✈️|🧑🏽‍🌾|🧑🏽‍🍳|🧑🏽‍🍼|🧑🏽‍🎄|🧑🏽‍🎓|🧑🏽‍🎤|🧑🏽‍🎨|🧑🏽‍🏫|🧑🏽‍🏭|🧑🏽‍💻|🧑🏽‍💼|🧑🏽‍🔧|🧑🏽‍🔬|🧑🏽‍🚀|🧑🏽‍🚒|🧑🏽‍🦯|🧑🏽‍🦰|🧑🏽‍🦱|🧑🏽‍🦲|🧑🏽‍🦳|🧑🏽‍🦼|🧑🏽‍🦽|🧑🏾‍⚕️|🧑🏾‍⚖️|🧑🏾‍✈️|🧑🏾‍🌾|🧑🏾‍🍳|🧑🏾‍🍼|🧑🏾‍🎄|🧑🏾‍🎓|🧑🏾‍🎤|🧑🏾‍🎨|🧑🏾‍🏫|🧑🏾‍🏭|🧑🏾‍💻|🧑🏾‍💼|🧑🏾‍🔧|🧑🏾‍🔬|🧑🏾‍🚀|🧑🏾‍🚒|🧑🏾‍🦯|🧑🏾‍🦰|🧑🏾‍🦱|🧑🏾‍🦲|🧑🏾‍🦳|🧑🏾‍🦼|🧑🏾‍🦽|🧑🏿‍⚕️|🧑🏿‍⚖️|🧑🏿‍✈️|🧑🏿‍🌾|🧑🏿‍🍳|🧑🏿‍🍼|🧑🏿‍🎄|🧑🏿‍🎓|🧑🏿‍🎤|🧑🏿‍🎨|🧑🏿‍🏫|🧑🏿‍🏭|🧑🏿‍💻|🧑🏿‍💼|🧑🏿‍🔧|🧑🏿‍🔬|🧑🏿‍🚀|🧑🏿‍🚒|🧑🏿‍🦯|🧑🏿‍🦰|🧑🏿‍🦱|🧑🏿‍🦲|🧑🏿‍🦳|🧑🏿‍🦼|🧑🏿‍🦽|🧔🏻‍♀️|🧔🏻‍♂️|🧔🏼‍♀️|🧔🏼‍♂️|🧔🏽‍♀️|🧔🏽‍♂️|🧔🏾‍♀️|🧔🏾‍♂️|🧔🏿‍♀️|🧔🏿‍♂️|🧖🏻‍♀️|🧖🏻‍♂️|🧖🏼‍♀️|🧖🏼‍♂️|🧖🏽‍♀️|🧖🏽‍♂️|🧖🏾‍♀️|🧖🏾‍♂️|🧖🏿‍♀️|🧖🏿‍♂️|🧗🏻‍♀️|🧗🏻‍♂️|🧗🏼‍♀️|🧗🏼‍♂️|🧗🏽‍♀️|🧗🏽‍♂️|🧗🏾‍♀️|🧗🏾‍♂️|🧗🏿‍♀️|🧗🏿‍♂️|🧘🏻‍♀️|🧘🏻‍♂️|🧘🏼‍♀️|🧘🏼‍♂️|🧘🏽‍♀️|🧘🏽‍♂️|🧘🏾‍♀️|🧘🏾‍♂️|🧘🏿‍♀️|🧘🏿‍♂️|🧙🏻‍♀️|🧙🏻‍♂️|🧙🏼‍♀️|🧙🏼‍♂️|🧙🏽‍♀️|🧙🏽‍♂️|🧙🏾‍♀️|🧙🏾‍♂️|🧙🏿‍♀️|🧙🏿‍♂️|🧚🏻‍♀️|🧚🏻‍♂️|🧚🏼‍♀️|🧚🏼‍♂️|🧚🏽‍♀️|🧚🏽‍♂️|🧚🏾‍♀️|🧚🏾‍♂️|🧚🏿‍♀️|🧚🏿‍♂️|🧛🏻‍♀️|🧛🏻‍♂️|🧛🏼‍♀️|🧛🏼‍♂️|🧛🏽‍♀️|🧛🏽‍♂️|🧛🏾‍♀️|🧛🏾‍♂️|🧛🏿‍♀️|🧛🏿‍♂️|🧜🏻‍♀️|🧜🏻‍♂️|🧜🏼‍♀️|🧜🏼‍♂️|🧜🏽‍♀️|🧜🏽‍♂️|🧜🏾‍♀️|🧜🏾‍♂️|🧜🏿‍♀️|🧜🏿‍♂️|🧝🏻‍♀️|🧝🏻‍♂️|🧝🏼‍♀️|🧝🏼‍♂️|🧝🏽‍♀️|🧝🏽‍♂️|🧝🏾‍♀️|🧝🏾‍♂️|🧝🏿‍♀️|🧝🏿‍♂️|⛹🏻‍♀️|⛹🏻‍♂️|⛹🏼‍♀️|⛹🏼‍♂️|⛹🏽‍♀️|⛹🏽‍♂️|⛹🏾‍♀️|⛹🏾‍♂️|⛹🏿‍♀️|⛹🏿‍♂️|🏋️‍♀️|🏋️‍♂️|🏌️‍♀️|🏌️‍♂️|🏳️‍⚧️|🏳️‍🌈|🕵️‍♀️|🕵️‍♂️|😶‍🌫️|⛓️‍💥|⛹️‍♀️|⛹️‍♂️|❤️‍🔥|❤️‍🩹|🍄‍🟫|🍋‍🟩|🏃‍♀️|🏃‍♂️|🏃‍➡️|🏄‍♀️|🏄‍♂️|🏊‍♀️|🏊‍♂️|🏴‍☠️|🐕‍🦺|🐦‍🔥|🐻‍❄️|👨‍⚕️|👨‍⚖️|👨‍✈️|👨‍🌾|👨‍🍳|👨‍🍼|👨‍🎓|👨‍🎤|👨‍🎨|👨‍🏫|👨‍🏭|👨‍👦|👨‍👧|👨‍💻|👨‍💼|👨‍🔧|👨‍🔬|👨‍🚀|👨‍🚒|👨‍🦯|👨‍🦰|👨‍🦱|👨‍🦲|👨‍🦳|👨‍🦼|👨‍🦽|👩‍⚕️|👩‍⚖️|👩‍✈️|👩‍🌾|👩‍🍳|👩‍🍼|👩‍🎓|👩‍🎤|👩‍🎨|👩‍🏫|👩‍🏭|👩‍👦|👩‍👧|👩‍💻|👩‍💼|👩‍🔧|👩‍🔬|👩‍🚀|👩‍🚒|👩‍🦯|👩‍🦰|👩‍🦱|👩‍🦲|👩‍🦳|👩‍🦼|👩‍🦽|👮‍♀️|👮‍♂️|👯‍♀️|👯‍♂️|👰‍♀️|👰‍♂️|👱‍♀️|👱‍♂️|👳‍♀️|👳‍♂️|👷‍♀️|👷‍♂️|💁‍♀️|💁‍♂️|💂‍♀️|💂‍♂️|💆‍♀️|💆‍♂️|💇‍♀️|💇‍♂️|😮‍💨|😵‍💫|🙂‍↔️|🙂‍↕️|🙅‍♀️|🙅‍♂️|🙆‍♀️|🙆‍♂️|🙇‍♀️|🙇‍♂️|🙋‍♀️|🙋‍♂️|🙍‍♀️|🙍‍♂️|🙎‍♀️|🙎‍♂️|🚣‍♀️|🚣‍♂️|🚴‍♀️|🚴‍♂️|🚵‍♀️|🚵‍♂️|🚶‍♀️|🚶‍♂️|🚶‍➡️|🤦‍♀️|🤦‍♂️|🤵‍♀️|🤵‍♂️|🤷‍♀️|🤷‍♂️|🤸‍♀️|🤸‍♂️|🤹‍♀️|🤹‍♂️|🤼‍♀️|🤼‍♂️|🤽‍♀️|🤽‍♂️|🤾‍♀️|🤾‍♂️|🦸‍♀️|🦸‍♂️|🦹‍♀️|🦹‍♂️|🧍‍♀️|🧍‍♂️|🧎‍♀️|🧎‍♂️|🧎‍➡️|🧏‍♀️|🧏‍♂️|🧑‍⚕️|🧑‍⚖️|🧑‍✈️|🧑‍🌾|🧑‍🍳|🧑‍🍼|🧑‍🎄|🧑‍🎓|🧑‍🎤|🧑‍🎨|🧑‍🏫|🧑‍🏭|🧑‍💻|🧑‍💼|🧑‍🔧|🧑‍🔬|🧑‍🚀|🧑‍🚒|🧑‍🦯|🧑‍🦰|🧑‍🦱|🧑‍🦲|🧑‍🦳|🧑‍🦼|🧑‍🦽|🧑‍🧒|🧔‍♀️|🧔‍♂️|🧖‍♀️|🧖‍♂️|🧗‍♀️|🧗‍♂️|🧘‍♀️|🧘‍♂️|🧙‍♀️|🧙‍♂️|🧚‍♀️|🧚‍♂️|🧛‍♀️|🧛‍♂️|🧜‍♀️|🧜‍♂️|🧝‍♀️|🧝‍♂️|🧞‍♀️|🧞‍♂️|🧟‍♀️|🧟‍♂️|\\*️⃣|🇦🇨|🇦🇩|🇦🇪|🇦🇫|🇦🇬|🇦🇮|🇦🇱|🇦🇲|🇦🇴|🇦🇶|🇦🇷|🇦🇸|🇦🇹|🇦🇺|🇦🇼|🇦🇽|🇦🇿|🇧🇦|🇧🇧|🇧🇩|🇧🇪|🇧🇫|🇧🇬|🇧🇭|🇧🇮|🇧🇯|🇧🇱|🇧🇲|🇧🇳|🇧🇴|🇧🇶|🇧🇷|🇧🇸|🇧🇹|🇧🇻|🇧🇼|🇧🇾|🇧🇿|🇨🇦|🇨🇨|🇨🇩|🇨🇫|🇨🇬|🇨🇭|🇨🇮|🇨🇰|🇨🇱|🇨🇲|🇨🇳|🇨🇴|🇨🇵|🇨🇷|🇨🇺|🇨🇻|🇨🇼|🇨🇽|🇨🇾|🇨🇿|🇩🇪|🇩🇬|🇩🇯|🇩🇰|🇩🇲|🇩🇴|🇩🇿|🇪🇦|🇪🇨|🇪🇪|🇪🇬|🇪🇭|🇪🇷|🇪🇸|🇪🇹|🇪🇺|🇫🇮|🇫🇯|🇫🇰|🇫🇲|🇫🇴|🇫🇷|🇬🇦|🇬🇧|🇬🇩|🇬🇪|🇬🇫|🇬🇬|🇬🇭|🇬🇮|🇬🇱|🇬🇲|🇬🇳|🇬🇵|🇬🇶|🇬🇷|🇬🇸|🇬🇹|🇬🇺|🇬🇼|🇬🇾|🇭🇰|🇭🇲|🇭🇳|🇭🇷|🇭🇹|🇭🇺|🇮🇨|🇮🇩|🇮🇪|🇮🇱|🇮🇲|🇮🇳|🇮🇴|🇮🇶|🇮🇷|🇮🇸|🇮🇹|🇯🇪|🇯🇲|🇯🇴|🇯🇵|🇰🇪|🇰🇬|🇰🇭|🇰🇮|🇰🇲|🇰🇳|🇰🇵|🇰🇷|🇰🇼|🇰🇾|🇰🇿|🇱🇦|🇱🇧|🇱🇨|🇱🇮|🇱🇰|🇱🇷|🇱🇸|🇱🇹|🇱🇺|🇱🇻|🇱🇾|🇲🇦|🇲🇨|🇲🇩|🇲🇪|🇲🇫|🇲🇬|🇲🇭|🇲🇰|🇲🇱|🇲🇲|🇲🇳|🇲🇴|🇲🇵|🇲🇶|🇲🇷|🇲🇸|🇲🇹|🇲🇺|🇲🇻|🇲🇼|🇲🇽|🇲🇾|🇲🇿|🇳🇦|🇳🇨|🇳🇪|🇳🇫|🇳🇬|🇳🇮|🇳🇱|🇳🇴|🇳🇵|🇳🇷|🇳🇺|🇳🇿|🇴🇲|🇵🇦|🇵🇪|🇵🇫|🇵🇬|🇵🇭|🇵🇰|🇵🇱|🇵🇲|🇵🇳|🇵🇷|🇵🇸|🇵🇹|🇵🇼|🇵🇾|🇶🇦|🇷🇪|🇷🇴|🇷🇸|🇷🇺|🇷🇼|🇸🇦|🇸🇧|🇸🇨|🇸🇩|🇸🇪|🇸🇬|🇸🇭|🇸🇮|🇸🇯|🇸🇰|🇸🇱|🇸🇲|🇸🇳|🇸🇴|🇸🇷|🇸🇸|🇸🇹|🇸🇻|🇸🇽|🇸🇾|🇸🇿|🇹🇦|🇹🇨|🇹🇩|🇹🇫|🇹🇬|🇹🇭|🇹🇯|🇹🇰|🇹🇱|🇹🇲|🇹🇳|🇹🇴|🇹🇷|🇹🇹|🇹🇻|🇹🇼|🇹🇿|🇺🇦|🇺🇬|🇺🇲|🇺🇳|🇺🇸|🇺🇾|🇺🇿|🇻🇦|🇻🇨|🇻🇪|🇻🇬|🇻🇮|🇻🇳|🇻🇺|🇼🇫|🇼🇸|🇽🇰|🇾🇪|🇾🇹|🇿🇦|🇿🇲|🇿🇼|🎅🏻|🎅🏼|🎅🏽|🎅🏾|🎅🏿|🏂🏻|🏂🏼|🏂🏽|🏂🏾|🏂🏿|🏃🏻|🏃🏼|🏃🏽|🏃🏾|🏃🏿|🏄🏻|🏄🏼|🏄🏽|🏄🏾|🏄🏿|🏇🏻|🏇🏼|🏇🏽|🏇🏾|🏇🏿|🏊🏻|🏊🏼|🏊🏽|🏊🏾|🏊🏿|🏋🏻|🏋🏼|🏋🏽|🏋🏾|🏋🏿|🏌🏻|🏌🏼|🏌🏽|🏌🏾|🏌🏿|🐈‍⬛|🐦‍⬛|👂🏻|👂🏼|👂🏽|👂🏾|👂🏿|👃🏻|👃🏼|👃🏽|👃🏾|👃🏿|👆🏻|👆🏼|👆🏽|👆🏾|👆🏿|👇🏻|👇🏼|👇🏽|👇🏾|👇🏿|👈🏻|👈🏼|👈🏽|👈🏾|👈🏿|👉🏻|👉🏼|👉🏽|👉🏾|👉🏿|👊🏻|👊🏼|👊🏽|👊🏾|👊🏿|👋🏻|👋🏼|👋🏽|👋🏾|👋🏿|👌🏻|👌🏼|👌🏽|👌🏾|👌🏿|👍🏻|👍🏼|👍🏽|👍🏾|👍🏿|👎🏻|👎🏼|👎🏽|👎🏾|👎🏿|👏🏻|👏🏼|👏🏽|👏🏾|👏🏿|👐🏻|👐🏼|👐🏽|👐🏾|👐🏿|👦🏻|👦🏼|👦🏽|👦🏾|👦🏿|👧🏻|👧🏼|👧🏽|👧🏾|👧🏿|👨🏻|👨🏼|👨🏽|👨🏾|👨🏿|👩🏻|👩🏼|👩🏽|👩🏾|👩🏿|👫🏻|👫🏼|👫🏽|👫🏾|👫🏿|👬🏻|👬🏼|👬🏽|👬🏾|👬🏿|👭🏻|👭🏼|👭🏽|👭🏾|👭🏿|👮🏻|👮🏼|👮🏽|👮🏾|👮🏿|👰🏻|👰🏼|👰🏽|👰🏾|👰🏿|👱🏻|👱🏼|👱🏽|👱🏾|👱🏿|👲🏻|👲🏼|👲🏽|👲🏾|👲🏿|👳🏻|👳🏼|👳🏽|👳🏾|👳🏿|👴🏻|👴🏼|👴🏽|👴🏾|👴🏿|👵🏻|👵🏼|👵🏽|👵🏾|👵🏿|👶🏻|👶🏼|👶🏽|👶🏾|👶🏿|👷🏻|👷🏼|👷🏽|👷🏾|👷🏿|👸🏻|👸🏼|👸🏽|👸🏾|👸🏿|👼🏻|👼🏼|👼🏽|👼🏾|👼🏿|💁🏻|💁🏼|💁🏽|💁🏾|💁🏿|💂🏻|💂🏼|💂🏽|💂🏾|💂🏿|💃🏻|💃🏼|💃🏽|💃🏾|💃🏿|💅🏻|💅🏼|💅🏽|💅🏾|💅🏿|💆🏻|💆🏼|💆🏽|💆🏾|💆🏿|💇🏻|💇🏼|💇🏽|💇🏾|💇🏿|💏🏻|💏🏼|💏🏽|💏🏾|💏🏿|💑🏻|💑🏼|💑🏽|💑🏾|💑🏿|💪🏻|💪🏼|💪🏽|💪🏾|💪🏿|🕴🏻|🕴🏼|🕴🏽|🕴🏾|🕴🏿|🕵🏻|🕵🏼|🕵🏽|🕵🏾|🕵🏿|🕺🏻|🕺🏼|🕺🏽|🕺🏾|🕺🏿|🖐🏻|🖐🏼|🖐🏽|🖐🏾|🖐🏿|🖕🏻|🖕🏼|🖕🏽|🖕🏾|🖕🏿|🖖🏻|🖖🏼|🖖🏽|🖖🏾|🖖🏿|🙅🏻|🙅🏼|🙅🏽|🙅🏾|🙅🏿|🙆🏻|🙆🏼|🙆🏽|🙆🏾|🙆🏿|🙇🏻|🙇🏼|🙇🏽|🙇🏾|🙇🏿|🙋🏻|🙋🏼|🙋🏽|🙋🏾|🙋🏿|🙌🏻|🙌🏼|🙌🏽|🙌🏾|🙌🏿|🙍🏻|🙍🏼|🙍🏽|🙍🏾|🙍🏿|🙎🏻|🙎🏼|🙎🏽|🙎🏾|🙎🏿|🙏🏻|🙏🏼|🙏🏽|🙏🏾|🙏🏿|🚣🏻|🚣🏼|🚣🏽|🚣🏾|🚣🏿|🚴🏻|🚴🏼|🚴🏽|🚴🏾|🚴🏿|🚵🏻|🚵🏼|🚵🏽|🚵🏾|🚵🏿|🚶🏻|🚶🏼|🚶🏽|🚶🏾|🚶🏿|🛀🏻|🛀🏼|🛀🏽|🛀🏾|🛀🏿|🛌🏻|🛌🏼|🛌🏽|🛌🏾|🛌🏿|🤌🏻|🤌🏼|🤌🏽|🤌🏾|🤌🏿|🤏🏻|🤏🏼|🤏🏽|🤏🏾|🤏🏿|🤘🏻|🤘🏼|🤘🏽|🤘🏾|🤘🏿|🤙🏻|🤙🏼|🤙🏽|🤙🏾|🤙🏿|🤚🏻|🤚🏼|🤚🏽|🤚🏾|🤚🏿|🤛🏻|🤛🏼|🤛🏽|🤛🏾|🤛🏿|🤜🏻|🤜🏼|🤜🏽|🤜🏾|🤜🏿|🤝🏻|🤝🏼|🤝🏽|🤝🏾|🤝🏿|🤞🏻|🤞🏼|🤞🏽|🤞🏾|🤞🏿|🤟🏻|🤟🏼|🤟🏽|🤟🏾|🤟🏿|🤦🏻|🤦🏼|🤦🏽|🤦🏾|🤦🏿|🤰🏻|🤰🏼|🤰🏽|🤰🏾|🤰🏿|🤱🏻|🤱🏼|🤱🏽|🤱🏾|🤱🏿|🤲🏻|🤲🏼|🤲🏽|🤲🏾|🤲🏿|🤳🏻|🤳🏼|🤳🏽|🤳🏾|🤳🏿|🤴🏻|🤴🏼|🤴🏽|🤴🏾|🤴🏿|🤵🏻|🤵🏼|🤵🏽|🤵🏾|🤵🏿|🤶🏻|🤶🏼|🤶🏽|🤶🏾|🤶🏿|🤷🏻|🤷🏼|🤷🏽|🤷🏾|🤷🏿|🤸🏻|🤸🏼|🤸🏽|🤸🏾|🤸🏿|🤹🏻|🤹🏼|🤹🏽|🤹🏾|🤹🏿|🤽🏻|🤽🏼|🤽🏽|🤽🏾|🤽🏿|🤾🏻|🤾🏼|🤾🏽|🤾🏾|🤾🏿|🥷🏻|🥷🏼|🥷🏽|🥷🏾|🥷🏿|🦵🏻|🦵🏼|🦵🏽|🦵🏾|🦵🏿|🦶🏻|🦶🏼|🦶🏽|🦶🏾|🦶🏿|🦸🏻|🦸🏼|🦸🏽|🦸🏾|🦸🏿|🦹🏻|🦹🏼|🦹🏽|🦹🏾|🦹🏿|🦻🏻|🦻🏼|🦻🏽|🦻🏾|🦻🏿|🧍🏻|🧍🏼|🧍🏽|🧍🏾|🧍🏿|🧎🏻|🧎🏼|🧎🏽|🧎🏾|🧎🏿|🧏🏻|🧏🏼|🧏🏽|🧏🏾|🧏🏿|🧑🏻|🧑🏼|🧑🏽|🧑🏾|🧑🏿|🧒🏻|🧒🏼|🧒🏽|🧒🏾|🧒🏿|🧓🏻|🧓🏼|🧓🏽|🧓🏾|🧓🏿|🧔🏻|🧔🏼|🧔🏽|🧔🏾|🧔🏿|🧕🏻|🧕🏼|🧕🏽|🧕🏾|🧕🏿|🧖🏻|🧖🏼|🧖🏽|🧖🏾|🧖🏿|🧗🏻|🧗🏼|🧗🏽|🧗🏾|🧗🏿|🧘🏻|🧘🏼|🧘🏽|🧘🏾|🧘🏿|🧙🏻|🧙🏼|🧙🏽|🧙🏾|🧙🏿|🧚🏻|🧚🏼|🧚🏽|🧚🏾|🧚🏿|🧛🏻|🧛🏼|🧛🏽|🧛🏾|🧛🏿|🧜🏻|🧜🏼|🧜🏽|🧜🏾|🧜🏿|🧝🏻|🧝🏼|🧝🏽|🧝🏾|🧝🏿|🫃🏻|🫃🏼|🫃🏽|🫃🏾|🫃🏿|🫄🏻|🫄🏼|🫄🏽|🫄🏾|🫄🏿|🫅🏻|🫅🏼|🫅🏽|🫅🏾|🫅🏿|🫰🏻|🫰🏼|🫰🏽|🫰🏾|🫰🏿|🫱🏻|🫱🏼|🫱🏽|🫱🏾|🫱🏿|🫲🏻|🫲🏼|🫲🏽|🫲🏾|🫲🏿|🫳🏻|🫳🏼|🫳🏽|🫳🏾|🫳🏿|🫴🏻|🫴🏼|🫴🏽|🫴🏾|🫴🏿|🫵🏻|🫵🏼|🫵🏽|🫵🏾|🫵🏿|🫶🏻|🫶🏼|🫶🏽|🫶🏾|🫶🏿|🫷🏻|🫷🏼|🫷🏽|🫷🏾|🫷🏿|🫸🏻|🫸🏼|🫸🏽|🫸🏾|🫸🏿|#️⃣|0️⃣|1️⃣|2️⃣|3️⃣|4️⃣|5️⃣|6️⃣|7️⃣|8️⃣|9️⃣|☝🏻|☝🏼|☝🏽|☝🏾|☝🏿|⛹🏻|⛹🏼|⛹🏽|⛹🏾|⛹🏿|✊🏻|✊🏼|✊🏽|✊🏾|✊🏿|✋🏻|✋🏼|✋🏽|✋🏾|✋🏿|✌🏻|✌🏼|✌🏽|✌🏾|✌🏿|✍🏻|✍🏼|✍🏽|✍🏾|✍🏿|🅰️|🅱️|🅾️|🅿️|🈂️|🈷️|🌡️|🌤️|🌥️|🌦️|🌧️|🌨️|🌩️|🌪️|🌫️|🌬️|🌶️|🍽️|🎖️|🎗️|🎙️|🎚️|🎛️|🎞️|🎟️|🏋️|🏌️|🏍️|🏎️|🏔️|🏕️|🏖️|🏗️|🏘️|🏙️|🏚️|🏛️|🏜️|🏝️|🏞️|🏟️|🏳️|🏵️|🏷️|🐿️|👁️|📽️|🕉️|🕊️|🕯️|🕰️|🕳️|🕴️|🕵️|🕶️|🕷️|🕸️|🕹️|🖇️|🖊️|🖋️|🖌️|🖍️|🖐️|🖥️|🖨️|🖱️|🖲️|🖼️|🗂️|🗃️|🗄️|🗑️|🗒️|🗓️|🗜️|🗝️|🗞️|🗡️|🗣️|🗨️|🗯️|🗳️|🗺️|🛋️|🛍️|🛎️|🛏️|🛠️|🛡️|🛢️|🛣️|🛤️|🛥️|🛩️|🛰️|🛳️|©️|®️|‼️|⁉️|™️|ℹ️|↔️|↕️|↖️|↗️|↘️|↙️|↩️|↪️|⌨️|⏏️|⏭️|⏮️|⏯️|⏱️|⏲️|⏸️|⏹️|⏺️|Ⓜ️|▪️|▫️|▶️|◀️|◻️|◼️|☀️|☁️|☂️|☃️|☄️|☎️|☑️|☘️|☝️|☠️|☢️|☣️|☦️|☪️|☮️|☯️|☸️|☹️|☺️|♀️|♂️|♟️|♠️|♣️|♥️|♦️|♨️|♻️|♾️|⚒️|⚔️|⚕️|⚖️|⚗️|⚙️|⚛️|⚜️|⚠️|⚧️|⚰️|⚱️|⛈️|⛏️|⛑️|⛓️|⛩️|⛰️|⛱️|⛴️|⛷️|⛸️|⛹️|✂️|✈️|✉️|✌️|✍️|✏️|✒️|✔️|✖️|✝️|✡️|✳️|✴️|❄️|❇️|❣️|❤️|➡️|⤴️|⤵️|⬅️|⬆️|⬇️|〰️|〽️|㊗️|㊙️|[\\u231A\\u231B\\u23E9-\\u23EC\\u23F0\\u23F3\\u25FD\\u25FE\\u2614\\u2615\\u2648-\\u2653\\u267F\\u2693\\u26A1\\u26AA\\u26AB\\u26BD\\u26BE\\u26C4\\u26C5\\u26CE\\u26D4\\u26EA\\u26F2\\u26F3\\u26F5\\u26FA\\u26FD\\u2705\\u270A\\u270B\\u2728\\u274C\\u274E\\u2753-\\u2755\\u2757\\u2795-\\u2797\\u27B0\\u27BF\\u2B1B\\u2B1C\\u2B50\\u2B55\\u{1F004}\\u{1F0CF}\\u{1F18E}\\u{1F191}-\\u{1F19A}\\u{1F201}\\u{1F21A}\\u{1F22F}\\u{1F232}-\\u{1F236}\\u{1F238}-\\u{1F23A}\\u{1F250}\\u{1F251}\\u{1F300}-\\u{1F320}\\u{1F32D}-\\u{1F335}\\u{1F337}-\\u{1F37C}\\u{1F37E}-\\u{1F393}\\u{1F3A0}-\\u{1F3CA}\\u{1F3CF}-\\u{1F3D3}\\u{1F3E0}-\\u{1F3F0}\\u{1F3F4}\\u{1F3F8}-\\u{1F43E}\\u{1F440}\\u{1F442}-\\u{1F4FC}\\u{1F4FF}-\\u{1F53D}\\u{1F54B}-\\u{1F54E}\\u{1F550}-\\u{1F567}\\u{1F57A}\\u{1F595}\\u{1F596}\\u{1F5A4}\\u{1F5FB}-\\u{1F64F}\\u{1F680}-\\u{1F6C5}\\u{1F6CC}\\u{1F6D0}-\\u{1F6D2}\\u{1F6D5}-\\u{1F6D7}\\u{1F6DC}-\\u{1F6DF}\\u{1F6EB}\\u{1F6EC}\\u{1F6F4}-\\u{1F6FC}\\u{1F7E0}-\\u{1F7EB}\\u{1F7F0}\\u{1F90C}-\\u{1F93A}\\u{1F93C}-\\u{1F945}\\u{1F947}-\\u{1F9FF}\\u{1FA70}-\\u{1FA7C}\\u{1FA80}-\\u{1FA88}\\u{1FA90}-\\u{1FABD}\\u{1FABF}-\\u{1FAC5}\\u{1FACE}-\\u{1FADB}\\u{1FAE0}-\\u{1FAE8}\\u{1FAF0}-\\u{1FAF8}])'	},
	{
		// https://github.com/mathiasbynens/regexpu-core/issues/77
		pattern: '[\\p{ASCII}--\\p{Control}]',
		expected: '[ -~]',
	},
	{
		pattern: '[\\p{ASCII}&&\\p{Control}]',
		expected: '[\\0-\\x1F\\x7F]',
	},
	{
		pattern: '\\P{ASCII}',
		expected: '[\\x80-\\u{10FFFF}]',
		options: { unicodeSetsFlag: "transform", unicodePropertyEscapes: "transform" }
	},
	{
		pattern: '[\\p{ASCII}\\p{Decimal_Number}]',
		expected: '[\\p{ASCII}\\p{Decimal_Number}]'
	},
	{
		pattern: '[\\p{Lowercase_Letter}]',
		expected: '[\\p{Lowercase_Letter}]'
	},
	{
		pattern: '^[\\p{Script=Arabic}&&\\p{Number}]$',
		expected: '^[\\u0660-\\u0669\\u06F0-\\u06F9\\u{10E60}-\\u{10E7E}]$'
	},
	{
		pattern: '.',
		flags: 'sv',
		matches: ['\n'],
		options: { unicodeSetsFlag: 'transform', dotAllFlag: 'transform' },
		expected: '[\\s\\S]'
	}
];

exports.unicodeSetFixtures = unicodeSetFixtures;
