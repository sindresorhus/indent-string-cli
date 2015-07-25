#!/usr/bin/env node
'use strict';
var meow = require('meow');
var indentString = require('indent-string');

var cli = meow({
	help: [
		'Usage',
		'  $ indent-string <string> [--indent=<string>] [--count=<number>]',
		'  $ cat file.txt | indent-string > indented-file.txt',
		'',
		'Example',
		'  $ indent-string "$(printf \'Unicorns\\nRainbows\\n\')" --indent=♥ --count=4',
		'  ♥♥♥♥Unicorns',
		'  ♥♥♥♥Rainbows'
	]
}, {
	string: ['_']
});

var input = cli.input[0];
var flags = cli.flags;

function init(data) {
	console.log(indentString(data, flags.indent || ' ', flags.count));
}

if (!input && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	process.stdin.setEncoding('utf8');
	process.stdin.on('data', init);
}
