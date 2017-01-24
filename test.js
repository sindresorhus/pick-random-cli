import fs from 'fs';
import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const args = fs.readFileSync('fixture', 'utf8').trim().split('\n').concat('--count=2');
	const {stdout} = await execa('./cli.js', args);
	t.is(stdout.split('\n').length, 2);
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {
		input: fs.readFileSync('fixture')
	});
	t.is(stdout.split('\n').length, 1);
});
