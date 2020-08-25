const adjacentElementsProduct = require('./adjacentElementsProduct');

test('Product of large neighbour', () => {
    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21);

    expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 9])).toBe(27);
});
