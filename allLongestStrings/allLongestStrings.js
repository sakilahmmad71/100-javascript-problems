function allLongestStrings(inputArray) {
    let longest = 0;
    let longestArray = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest) {
            longest = inputArray[i].length;
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longest) {
            longestArray.push(inputArray[i]);
        }
    }

    return longestArray;
}

module.exports = allLongestStrings;
