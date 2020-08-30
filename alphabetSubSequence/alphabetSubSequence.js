const alphabetSubsequence = (str) => {
    const arrs = str.split('');
    let charArr = [];
    arrs.forEach((arr) => charArr.push(arr.charCodeAt(0)));

    if (new Set(charArr).size !== charArr.length) {
        return false;
    }

    for (let i = 0; i < charArr.length; i++) {
        if (charArr[i] >= charArr[i + 1]) {
            return false;
        }
    }

    return true;
};

module.exports = alphabetSubsequence;
