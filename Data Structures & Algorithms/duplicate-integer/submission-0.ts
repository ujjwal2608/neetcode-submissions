class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>
        for (let i = 0; i < nums.length; i++) {
            const a = nums[i]
            if (map.has(a)) {
                return true
            } else {
                map.set(a, 1)
            }
        }
        return false
    }
}
