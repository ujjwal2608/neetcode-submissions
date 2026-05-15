class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const smap = new Map<string, number>();
        const sarr = s.split("");
        for (let i = 0; i < sarr.length; i++) {
            smap.set(sarr[i], (smap.get(sarr[i]) || 0) + 1);
        }
        const tarr = t.split("");
        for (let i = 0; i < sarr.length; i++) {
            if (!smap.has(tarr[i])) return false;
            smap.set(tarr[i], smap.get(tarr[i]) - 1);
            if (smap.get(tarr[i]) === 0) smap.delete(tarr[i]);
        }
        return smap.size === 0;
    }
}
