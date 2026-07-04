class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        console.log(s)
        let left:number = 0
        let right: number = s.length-1

        while(left < right) {
            if (s[left] !== s[right]) {
                return false
            }
            
            left++
            right--
        }

        return true
    }
}
