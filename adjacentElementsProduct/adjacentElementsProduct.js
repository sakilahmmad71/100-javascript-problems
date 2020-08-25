function adjacentElementsProduct(inputArray) {
    let large = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > large) {
            large = product;
        }
    }

    return large;
}

module.exports = adjacentElementsProduct;
