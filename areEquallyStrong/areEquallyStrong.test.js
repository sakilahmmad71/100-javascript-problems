const areEquallyStrong = require('./areEquallyStrong');

test('Strong arm between you and your friend', () => {
    expect(areEquallyStrong(10, 15, 15, 10)).toBe(true);
    expect(areEquallyStrong(15, 10, 15, 10)).toBe(true);
    expect(areEquallyStrong(15, 10, 15, 9)).toBe(false);
});
