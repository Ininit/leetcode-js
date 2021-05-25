/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s.length % 2) return false;

  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  
  const stock = []
  
  for(let i = 0; i < s.length; i++) {
    if([')', '}', ']'].includes(s[i])) {
      const prefix = stock.pop()
      if(prefix && map[prefix] === s[i]) {
        continue;
      } else {
        return false
      }
    } else {
      stock.push(s[i]);
    }
  }

  return stock.length === 0;
};
// @lc code=end

