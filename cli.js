#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import indentString from 'indent-string';

const cli = meow(`
	Usage
	  $ indent-string <string> [--count=<number>] [--indent=<string>]
	  $ cat file.txt | indent-string > indented-file.txt

	Example
	  $ indent-string "$(printf 'Unicorns\\nRainbows\\n')" --count=4 --indent=♥
	  ♥♥♥♥Unicorns
	  ♥♥♥♥Rainbows
`, {
	importMeta: import.meta,
});

const input = cli.input[0];
const {count, indent} = cli.flags;

function init(data) {
	console.log(indentString(data, count, {indent}));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a string');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	(async () => {
		init(await getStdin());
	})();
}
