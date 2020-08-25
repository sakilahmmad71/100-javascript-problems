const { addTwoDigits, addTwoDigits2 } = require('./addTwoDigits');

test('transform the input to seperate addition', () => {
    expect(addTwoDigits(29)).toBe(11);
});

test('transform the input to seperate addition', () => {
    expect(addTwoDigits2(99)).toBe(18);
});
