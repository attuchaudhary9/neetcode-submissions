class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const myStack = []
        const parenthese = {
            '}': '{',
            ']' : '[', 
            ')' : '('
        }
        if (s.length % 2 !==0) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            if (!parenthese[s[i]]) {
                myStack.push(s[i])
            } else {
                const lastElement = myStack.pop();
                console.log(lastElement)
                if (lastElement !== parenthese[s[i]]) {
                    return false
                }
            }
        }
         return myStack.length === 0 
    }
}
