class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hashSet = new Set(nums)
        let max = 0;

        for (let i = 0; i < nums.length; i++) {
            let getILastElement =  nums[i] - 1;

            if (!hashSet.has(getILastElement)) {
                let start = nums[i]
                let temp = 0
                while (hashSet.has(start)) {
                    start++
                    temp++
                }

                max = Math.max(max, temp)
            }
        }

        return max;
    }
}
