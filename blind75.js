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

// Best time to sell a stock
//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/6027720/beats-100-video-explained-step-by-step-list-most-common-array-interview-problems/

var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    
    for (let currentPrice of prices) {
        minPrice = Math.min(currentPrice, minPrice);
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
};
