class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const arrs = s.split("");
        const arrt = t.split("");
        arrs.sort();
        arrt.sort();
        return this.compareArrays(arrs,arrt)
    }
    compareArrays(a: string[], b: string[]): boolean {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
}
