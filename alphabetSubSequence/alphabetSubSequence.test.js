const alphabetSubsequence = require('./alphabetSubSequence');

test('Alphabetic Sub Sequences or not', () => {
    expect(alphabetSubsequence('zab')).toBe(false);

    expect(alphabetSubsequence('cdce')).toBe(false);

    expect(alphabetSubsequence('ace')).toBe(true);

    expect(alphabetSubsequence('bxz')).toBe(true);
});
