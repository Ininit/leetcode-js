/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const mp = new Map()
  for(let i = 1; i <= numbers.length; i++) {
    mp.set(numbers[i - 1], i)
  }
  for(let i = 0; i < numbers.length; i++) {
    if(mp.has(target - numbers[i]) && mp.get(target - numbers[i]) !== i) {
      return [i + 1, mp.get(target - numbers[i])]
    }
  }
};
// @lc code=end

