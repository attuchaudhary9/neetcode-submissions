class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLen = 0;

        for (let i = 0; i < s.length; i++) {
            const freq = {};
            let maxFreq = 0;

            for (let j = i; j < s.length; j++) {
                freq[s[j]] = (freq[s[j]] || 0) + 1;
                maxFreq = Math.max(maxFreq, freq[s[j]]);

                const windowSize = j - i + 1;

                if (windowSize - maxFreq <= k) {
                    maxLen = Math.max(maxLen, windowSize);
                }
            }
        }

        return maxLen;
    }
}
