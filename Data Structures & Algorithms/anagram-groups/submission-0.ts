class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const seen = new Map()

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i]
            const keyArray = new Array(26).fill(0)
            for (const ch of word) {
                const value = ch.charCodeAt(0) - "a".charCodeAt(0)
                // console.log(`CH ${ch} Value: ${value}`)
                keyArray[value]++
            }
            const key = keyArray.join("#")
            if (seen.has(key)) {
                seen.get(key).push(word)
            } else {
                seen.set(key, [word])
            }
        }
        // console.log(Array.from(seen.values()))
        return Array.from(seen.values())
    }
}