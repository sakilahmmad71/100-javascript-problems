const addTwoDigits = (num) => {
    let sum = 0;
    num.toString()
        .split('')
        .forEach((n) => (sum += parseInt(n)));

    return sum;
};

const addTwoDigits2 = (num) => {
    return num
        .toString()
        .split('')
        .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
};

module.exports = { addTwoDigits, addTwoDigits2 };
