/**
 * 给定一个字符串，找出其中不含有重复字符的 最长子串 的长度
 * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param s
 */
export function lengthOfLongestSubstring(s: string) {
    if (!s) {
        return 0
    }
    let result = s[0]
    let num = result.length
    for (let i = 1; i < s.length; i++) {
        let index = result.indexOf(s[i])
        if (index > -1) {
            result = result.substring(index + 1)
        }
        result += s[i]
        num = Math.max(num, result.length)
    }
    return num
}
