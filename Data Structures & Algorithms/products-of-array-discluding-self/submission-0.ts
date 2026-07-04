class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const suffix = new Array(nums.length);
        const prefix = [1];

        for (let i = 1; i < nums.length; i++) {
            prefix.push(prefix[i - 1] * nums[i - 1]);
        }

        suffix[nums.length - 1] = 1;
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }
        console.log(suffix);

        // nums: [5, 2, 4, 3]
        // Sufix: [24, 12, 3, 1]
        // Prefix: [1, 5, 10, 40]

        const output = [];

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i];
        }

        return output
    }
}
