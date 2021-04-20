/*
* @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length === 0) return 0

  let n = haystack.length, m = needle.length

  const next = new Array(m).fill(0)

  for(let i = 1, j = 0; i < m; i++) {
    // j > 0 匹配不成功 j = next[j - 1]
    while (j > 0 && needle[i] !== needle[j]) j = next[j - 1]
    // 匹配成功 next[i] = j + 1, j++ i++
    if(needle[i] === needle[j]) next[i] = j++ + 1
    // 对于 j = 0 匹配不成功 next[i] = 0, i++, 初始化next将值设为0
  }

  for(let i = 0, j = 0; i < n; i++) {
    // j==0, s[i] !== p[j] continue
    // j > 0, s[i] !== p[j] j = next[j - 1]
    // j == m return i - m + 1
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }
    if(haystack[i] === needle[j]) j++
    if(j == m) return i - m + 1
  }

  return -1
};
// @lc code=end
