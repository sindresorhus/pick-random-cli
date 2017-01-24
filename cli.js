#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const pickRandom = require('pick-random');

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
`);

function init(items) {
	console.log(pickRandom(items, cli.flags).join('\n'));
}

const input = cli.input;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Specify some items to pick from');
	process.exit(1);
}

if (input.length > 0) {
	init(input);
} else {
	getStdin().then(data => {
		init(data.trim().split('\n'));
	});
}
