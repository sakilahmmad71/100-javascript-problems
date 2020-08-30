const alternatingSums = (arr) => {
    let evenIndexArr = [];
    let oddIndexArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenIndexArr.push(arr[i]);
        } else {
            oddIndexArr.push(arr[i]);
        }
    }

    const evenSum = evenIndexArr.reduce((acc, cur) => (acc += cur));
    const oddSum = oddIndexArr.reduce((acc, cur) => (acc += cur));

    return [evenSum, oddSum];
};

// More efficient
const alternatingSums2 = (arr) => {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return [evenSum, oddSum];
};

module.exports = { alternatingSums, alternatingSums2 };
