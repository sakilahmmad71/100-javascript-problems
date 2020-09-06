const areSimilar = (arr1, arr2) => {
    arr1.sort((a, b) => (a > b ? 1 : -1));
    arr2.sort((a, b) => (a > b ? 1 : -1));

    return arr1.toString() === arr2.toString();
};

module.exports = areSimilar;

// console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));
