const almostIncreasingSequence = require('./almostIncreasingSequence');

test('Almost increasing next elements', () => {
    const input = [1, 3, 2, 1];
    expect(almostIncreasingSequence(input)).toBe(false);
});

test('Almost increasing next elements', () => {
    const input = [1, 3, 2];
    expect(almostIncreasingSequence(input)).toBe(true);
});
