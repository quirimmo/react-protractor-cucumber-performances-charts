it('adds 1 + 2 to equal 3 in TScript', () => {
	const sum = require('./sum.tsx');
	expect(sum(1, 2)).toBe(3);
});
