import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['foo\nbar', '--count=4']);
	t.is(stdout, '    foo\n    bar');
});
