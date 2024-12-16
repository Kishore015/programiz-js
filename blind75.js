//https://leetcode.com/problems/two-sum/solutions/5486440/o-n-2-o-n-log-n-o-n-beats-100-java-python-c-javascript-go-rust/
// Two Sum Problem
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return null;
};
