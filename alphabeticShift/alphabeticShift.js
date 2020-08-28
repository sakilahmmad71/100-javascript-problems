const alphabeticShift = (inputString) => {
    let str = '';
    for (let i = 0; i < inputString.length; i++) {
        let code = inputString.charCodeAt(i);
        if (code === 122) {
            code = 97;
        } else {
            code++;
        }

        str += String.fromCharCode(code);
    }

    return str;
};

module.exports = alphabeticShift;
