class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLen = 0;
        let maxFrequency = 0;
        const frequencyMap = new Map();
        let right = 0;
        let left = 0;

        while (right < s.length) {
            frequencyMap.set(s[right], (frequencyMap.get(s[right]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, frequencyMap.get(s[right]));
            
            const windowSize = (right - left) + 1;
            const replacements = windowSize - maxFrequency;
            
            if (replacements <= k) {
                maxLen = Math.max(maxLen, windowSize);
                right++;
            } else {
                frequencyMap.set(s[left], (frequencyMap.get(s[left]) || 0) - 1);
                if (frequencyMap.get(s[left]) === 0) {
                    frequencyMap.delete(s[left]);
                }
                // REMOVED: maxFrequency = Math.max(...) line
                left++;
                right++;
            }
        }

        return maxLen;
    }
}
