const { alternatingSums, alternatingSums2 } = require('./alternatingSums');

test('Sum of the array of even index and odd index', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toStrictEqual([180, 105]);

    expect(alternatingSums([70, 90, 60, 85])).toStrictEqual([130, 175]);
});

test('Effient Sum of the array of even index and odd index', () => {
    expect(alternatingSums2([40, 40, 50, 40, 90])).toStrictEqual([180, 80]);

    expect(alternatingSums2([10, 70, 60, 75])).toStrictEqual([70, 145]);
});
