const absoluteValuesSumMinimization = require('./absoluteValuesSumMinization');

test('Median value', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7])).toBe(4);
});

test('Median value', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6])).toBe(4);
});

test('Median value', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6])).toBe(7);
});

test('Median value', () => {
    expect(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])).toBe(7);
});
