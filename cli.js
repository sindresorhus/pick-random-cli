#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import pickRandom from 'pick-random';

const cli = meow(`
	Usage
	  $ pick-random <item> … [--count=<number>]
	  $ cat newline-separated-picks.txt | pick-random

	Examples
	  $ pick-random unicorn rainbow cake pony --count=2
	  pony
	  rainbow

	  $ pick-random yes no
	  $ pick-random $(seq 54) --count=6
`, {
	importMeta: import.meta,
});

function init(items) {
	console.log(pickRandom(items, cli.flags).join('\n'));
}

const {input} = cli;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Specify some items to pick from');
	process.exit(1);
}

if (input.length > 0) {
	init(input);
} else {
	(async () => {
		const data = await getStdin();
		init(data.trim().split('\n'));
	})();
}
