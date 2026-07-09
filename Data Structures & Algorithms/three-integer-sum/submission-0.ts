class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let hashSet = new Set();

        let output = [];
        let sorted = [...nums].sort((a, b) => a - b);

        for (let i = 0; i < sorted.length; i++) {
            let left = i + 1;
            let right = sorted.length - 1;
            if (i > 0 && sorted[i] === sorted[i - 1]) continue;
            while (left < right) {
                const sum = sorted[i] + sorted[left] + sorted[right];
                if (sum === 0) {
                    const values = [sorted[i], sorted[left], sorted[right]];
                    console.log("values", values);
                    const key = values.toString();
                    if (!hashSet.has(key)) {
                        output.push(values);
                        hashSet.add(key);
                    }
                    while (left < right && sorted[left] === sorted[left + 1]) left++;
                    while (left < right && sorted[right] === sorted[right - 1]) right--;

                    right--;
                    left++;
                } else if (sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return output;
    }
}
