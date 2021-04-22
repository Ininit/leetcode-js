/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const n = nums.length
  if(n === 0) return [-1, -1]
  let left = 0, right = n - 1
  
  while (left < right) {
    const mid = Math.floor((left + right) >> 1)
    if(nums[mid] === target) {
      left = right = mid
      break
    }
    if(nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  if (nums[left] !== target) {
    return [-1, -1]
  }

  while (nums[left] === target) {
    left--
  }
  while (nums[right] === target) {
    right++
  }
  return [left + 1, right - 1]
};
// @lc code=end

