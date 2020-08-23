function absoluteValuesSumMinimization(nums) {
    const isEven = nums.length % 2 === 0;
    return isEven
        ? nums[Math.floor(nums.length / 2 - 1)]
        : nums[Math.floor(nums.length / 2)];
}

module.exports = absoluteValuesSumMinimization;
