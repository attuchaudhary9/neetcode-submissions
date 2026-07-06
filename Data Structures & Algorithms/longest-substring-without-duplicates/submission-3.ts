class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        let hashSet = new Set()
        let left = 0;
        for (let right = 0; right < s.length; right++) {
            while (hashSet.has(s[right])) {
                hashSet.delete(s[left])
                left = left + 1
            }
            hashSet.add(s[right])
            max = Math.max(max, (right-left) + 1)

        }

        return max
    }
}
