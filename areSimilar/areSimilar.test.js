const areSimilar = require('./areSimilar');

test('Two are similar or not thought their values are not as same index', () => {
    expect(areSimilar([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(areSimilar([1, 2, 3], [2, 1, 3])).toBe(true);
    expect(areSimilar([1, 2, 2], [2, 1, 1])).toBe(false);
});
