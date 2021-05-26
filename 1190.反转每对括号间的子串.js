/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {

  // (abc(de(fg)h)i)
  // (a <- b <- c -> (d -> e -> (f <- g) -> h) <- i)
  const n = s.length
  const pairs = new Array(n).fill(0)
  const stock = []
  for(let i = 0; i < n; i++) {
    if(s[i] === '(') {
      stock.push(i)
    } else if(s[i] === ')') {
      const j = stock.pop()
      pairs[i] = j
      pairs[j] = i
    }
  }
  // 模拟路径
  let i = 0, step = 1
  const ans = []
  while (i < n) {
    if(s[i] === '(' || s[i] === ')') {
      i = pairs[i]
      step = -step
    } else {
      ans.push(s[i])
    }

    i += step
  }

  return ans.join('')
};



// @lc code=end

