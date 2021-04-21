/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 二分 k = k - k/2
  const n = nums1.length
  const m = nums2.length
  const k = Math.ceil((n + m) / 2)
  const isOdd = (n + m) & 1

  if(isOdd) {
    return getKelement(nums1, nums2, k)
  } else {
    return (getKelement(nums1, nums2, k) + getKelement(nums1, nums2, k + 1)) / 2
  }


};

function getKelement(nums1, nums2, k) {
  const n = nums1.length
  const m = nums2.length
  let n1 = 0, n2 = 0
  while (true) {

      if (n1 === n) {
        return nums2[n2 + k - 1]
      }
      if (n2 === m) {
        return nums1[n1 + k - 1]
      }
      if (k === 1) {
        return Math.min(nums1[n1], nums2[n2])
      }

      let mid = Math.floor(k / 2) - 1
      let nn1 = Math.min(n1 + mid, n - 1)
      let nn2 = Math.min(n2 + mid, m - 1)

      if(nums1[nn1] <= nums2[nn2]) {
        k -= (nn1 - n1 + 1)
        n1 = nn1 + 1
      } else {
        k -= (nn2 - n2 + 1)
        n2 = nn2 + 1
      }

  }
}
// @lc code=end