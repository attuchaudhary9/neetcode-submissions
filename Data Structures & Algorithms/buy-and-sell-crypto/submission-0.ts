class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        let left = 0;
        let right = 1;
        while (right < prices.length) {
            if (prices[right] < prices[left]) {
                left = right;
            } else {
                max = Math.max(max, prices[right] - prices[left]);
            }
            right++;
        }

        return max;
    }
}
