/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const need = {} // 维护 t 字符
  const win = {} // 窗口字符

  for(let c of t) {
    if(need[c]) {
      need[c]++
    } else {
      need[c] = 1
    }
  }

  let left = 0, right = 0 // 窗口左右边界
  let minLen = s.length + 1
  let minStr = ''
  // valid 确认值的大小， len 需要确认的字符
  // valid === len 意味可以收缩了
  let valid = 0, len = Object.keys(need).length
  while (right < s.length) {
    const rs = s[right]
    right++
    // 窗口扩大
    if(!win[rs]) win[rs] = 1
    else win[rs]++
    // 确认值增大
    if(need[rs] && need[rs] === win[rs]) {
      valid++
    }
    // 窗口范围包含目标字符了， 开始收缩
    while (valid === len) {
      if(right - left < minLen) {
        minLen = right - left
        minStr = s.slice(left, right)
      }

      let ls = s[left]
      left++
      // 收缩的时候 窗口减少 valid 减少
      win[ls]--
      if(need[ls] && win[ls] < need[ls]) {
        valid--
      }
    }
  }

  return minStr

};
// @lc code=end

