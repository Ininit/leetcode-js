/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
  if(N === 0) return 0
  // 
  const opr = ['*', '/', '+', '-']
  let opri = 0
  let stack = []
  for(let i = N; i > 0; i++) {
    const tempOp = stack.pop()
    switch (tempOp) {
      case '*':
        const left = stack.pop()
        stack.push(left * i)
        break;
      case '/':
        const left = stack.pop()
        stack.push(Math.floor(left / i))
          break;
      case '+':
        stack.push('+')
        stack.push(i)
          break;
      case '-':
        stack.push('-')
        stack.push(i)
        break;
      default:
        stack.push(i)
        break;
    }
  }
  
  while(stack.length > 1) {
    const right = stack.pop()
    const opr = stack.pop()
    const left = stack.pop()
    if(opr === '+'){
      stack.push(left + right)
    } else {
      stack.push(left - right)
    }
  }

  return stack[0]

};
// @lc code=end

