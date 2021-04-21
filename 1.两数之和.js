/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const mp = new Map()
  for(let i = 0; i < nums.length; i++) {
    mp.set(nums[i], i)
  }
  for(let i = 0; i < nums.length; i++) {

    if(mp.has(target - nums[i]) && mp.get(target - nums[i]) !== i) {
      return [i, mp.get(target - nums[i])]
    }
  }
};
// @lc code=end

