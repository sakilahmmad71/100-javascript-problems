const allLongestStrings = require('./allLongestStrings');

test('Finding all longest strings in given array', () => {
    const input = ['aba', 'aa', 'ad', 'vcd', 'aba'];
    const output = ['aba', 'vcd', 'aba'];

    expect(allLongestStrings(input)).toStrictEqual(output);
});

test('Finding all longest strings in given array', () => {
    const input = ['hello', 'hi', 'miss', 'great', 'best', 'tries'];
    const output = ['hello', 'great', 'tries'];

    expect(allLongestStrings(input)).toStrictEqual(output);
});
