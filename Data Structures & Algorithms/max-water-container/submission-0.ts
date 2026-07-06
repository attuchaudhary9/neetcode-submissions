class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let maxWater = 0;
        let right  = heights.length - 1
        let left = 0;

        while (left < right) {
            const heightAtLeft = heights[left];
            const heightAtRight = heights[right]
            if (heightAtLeft < heightAtRight) {
                maxWater = Math.max(maxWater, (right-left) * heightAtLeft)
                left++
            } else {
                maxWater = Math.max(maxWater, (right-left) * heightAtRight)
                right--
            }

        }
        return maxWater
    }
}
