class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const prefixMax = [];
        prefixMax[0] = height[0]
        const suffixMax = [] 
        suffixMax[height.length-1] = height[height.length-1];

        let water = 0;

        for (let i = 1; i < height.length; i++) {
            prefixMax[i] = Math.max(height[i], prefixMax[i-1])
        }

        for (let i = height.length - 2; i >= 0 ; i--) {
            suffixMax[i] = Math.max(height[i], suffixMax[i+1])
        }

        console.log(suffixMax)
        console.log("prefixMax", prefixMax)
        for (let i = 0; i< height.length; i++) {
            const leftMax = prefixMax[i]
            const rightMax = suffixMax[i];
            if (height[i] < leftMax && height[i] < rightMax) {
                water += Math.min(leftMax, rightMax) - height[i]
            }
        }

        console.log(water)
        return water
    }
}
