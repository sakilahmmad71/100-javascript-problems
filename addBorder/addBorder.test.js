const { addBorder, addBorder2 } = require('./addBorder');

test('Make border around text', () => {
    const input = ['abc', 'def'];
    const output = ['*****', '*abc*', '*def*', '*****'];

    expect(addBorder(input)).toStrictEqual(output);
});

test('Make border around text', () => {
    const input = ['abcd', 'defg'];
    const output = ['******', '*abcd*', '*defg*', '******'];

    expect(addBorder2(input)).toStrictEqual(output);
});
