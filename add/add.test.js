const { add, add2, add3 } = require('./add');

test('Add two value', () => {
    expect(add(10, 5)).toBe(15);
});

test('Add multiple value', () => {
    expect(add2(10, 20, 30, 50, 100)).toBe(210);
});

test('Add multiple value with reduce function', () => {
    expect(add3(10, 20, 30, 50, 100, 40)).toBe(250);
});
