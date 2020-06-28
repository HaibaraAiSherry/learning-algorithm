import {lengthOfLongestSubstring} from "../src/Lengthoflongestsubstr";

describe('最长字符串', () => {
    it('测试一', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    })

    it('测试二', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    })

    it('测试三', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    })
})
