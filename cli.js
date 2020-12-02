#!/usr/bin/env node
'use strict';
const meow = require('meow');
const indentString = require('indent-string');

const cli = meow(`
	Usage
	  $ indent-string <string> [--count=<number>] [--indent=<string>]
	  $ cat file.txt | indent-string > indented-file.txt

	Example
	  $ indent-string "$(printf 'Unicorns\\nRainbows\\n')" --count=4 --indent=♥
	  ♥♥♥♥Unicorns
	  ♥♥♥♥Rainbows
`, {
	string: ['_']
});

const input = cli.input[0];

function init(data) {
	console.log(indentString(data, cli.flags.count, cli.flags.indent));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a string');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', init);
}
