// 一层循环
function findMid(nums) {

  for(let i = 1; i < nums.length; i++) {
    if(nums[i - 1] > nums[i]) {
      return nums[i]
    }
  }

  return nums[0]

}

// 二分查找
function findMid2(nums) {
  const len = nums.length
  let low = 0
  let high = len - 1

  while (low < high) {
    const pivot = Math.floor((low + high) / 2)
    if(nums[pivot] < nums[high]) {
      high = pivot
    } else {
      low = pivot + 1
    }
  }
  return nums[low]
}