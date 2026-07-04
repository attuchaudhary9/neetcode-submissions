class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const hashMap = new Map()

        if (s.length !== t.length) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            hashMap.set(s[i], (hashMap.get(s[i]) || 0) + 1)
        }

        for (let i = 0; i < s.length; i++) {
            if (!hashMap.has(t[i])) {
                return false
            } else {
                hashMap.set(t[i], hashMap.get(t[i]) - 1)

                if (hashMap.get(t[i]) === 0) {
                    hashMap.delete(t[i])
                }
            }
        }
        return true
    }
}
