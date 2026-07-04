class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const seen = new Map()

        for (let i =0; i< nums.length; i++) {
            seen.set(nums[i], (seen.get(nums[i]) || 0) + 1)
        }
        
        //Buckets creation.
        const buckets = Array.from({length: nums.length + 1}, () =>[])

        //Filling the buckets.
        for (const [key, value] of seen) {
            buckets[value].push(key)
        }

        const output = []

        for (let i = buckets.length - 1; i > 0; i--) {
            let bucket  = buckets[i]
            for (const b of bucket) {
                output.push(b)
                if (output.length === k) {
                    return output
                }
            }
        }
        return output
    }
}
