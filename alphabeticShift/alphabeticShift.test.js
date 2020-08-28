const alphabeticShift = require('./alphabeticShift');

test('Manipulating every charecter to next charecter', () => {
    expect(alphabeticShift('crazy')).toBe('dsbaz');
});

test('Manipulating every charecter to next charecter', () => {
    expect(alphabeticShift('hello')).toBe('ifmmp');
});
