/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const mid = Math.floor((low + high) / 2)
    if(nums[mid] < nums[high]) {
      high = mid
    } else if(nums[mid] > nums[high]) {
      low = mid + 1
    } else {
      high--
    }
  }
  return nums[low]
};
// @lc code=end

