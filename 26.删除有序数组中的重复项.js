/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let ans = 1
  let j = 1
  
  for(let i = 1; i < nums.length && j < nums.length; i++) {
    while (j < nums.length && nums[j] === nums[i - 1]) {
      j++
    }
    if(j === nums.length) break
    nums[i] = nums[j]
    ans++
  }


  return ans
};
// @lc code=end
