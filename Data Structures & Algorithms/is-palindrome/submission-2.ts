class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s: string): boolean {
        const isAlphaNumeric = (ch: string): boolean => {
            return /[a-zA-Z0-9]/.test(ch);
        };
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        console.log(s)
        let left:number = 0
        let right: number = s.length-1

        while(left < right) {
            if(s[left])
            if (s[left] !== s[right]) {
                return false
            }
            
            left++
            right--
        }

        return true
    }
}
