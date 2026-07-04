class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Map()

        for (const num of nums) {
            if(seen.has(num)) {
                return true
            }
            seen.set(num, (seen.get(num) || 0) + 1)
        }

        return false
    }
}
