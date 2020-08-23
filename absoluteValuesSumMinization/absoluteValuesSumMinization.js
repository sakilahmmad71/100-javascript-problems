function absoluteValuesSumMinimization(nums) {
    const isEven = nums.length % 2 === 0;
    return isEven
        ? nums[Math.floor(nums.length / 2 - 1)]
        : nums[Math.floor(nums.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
