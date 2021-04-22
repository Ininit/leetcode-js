/*
 * @lc app=leetcode.cn id=363 lang=javascript
 *
 * [363] 矩形区域不超过 K 的最大数值和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var maxSumSubmatrix = function (matrix, k) {
  const m = matrix.length;
  const n = matrix[0].length;

  let ans = Number.MIN_SAFE_INTEGER;

  // // 上边界
  for (let i = 0; i < m; i++) {
    const sum = new Array(n).fill(0);
    // 下边界
    for (let j = i; j < m; j++) {
      for (let h = 0; h < n; h++) {
        sum[h] += matrix[j][h];
      }

      const sumSet = new Set();
      
      let s = 0;

      // Sr - Sl < k => Sl > Sr - k

      for (const v of sum) {
        s += v;
        let ceilValue = findSetCeil([...sumSet], s - k);
        if (ceilValue != null) {
          ans = Math.max(ans, s - ceilValue);
        }

        sumSet.add(s);
      }
    }
  }

  return ans;
};

function findSetCeil(arr, value) {
  arr = arr.sort((a, b) => a - b);

  if (arr[arr.length - 1] < value) return undefined;

  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] < value) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  return arr[i];
}

// @lc code=end

