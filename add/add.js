const add = (n1, n2) => {
    return n1 + n2;
};

const add2 = (...nums) => {
    let sum = 0;
    nums.forEach((num) => (sum += num));
    return sum;
};

const add3 = (...nums) => nums.reduce((acc, cur) => acc + cur);

module.exports = { add, add2, add3 };
