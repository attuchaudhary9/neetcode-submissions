class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map()
        let index = 0
        for (const num of nums) {
            const complement = target - num;
            if (seen.has(complement)) {
                return [index, seen.get(complement)]
            } else {
seen.set(nums[index], index)
            }
            index++
        }
        return []
    }
}
