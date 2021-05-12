/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */
// xors 前缀
// xors[0] = 0
// xors[1] = xors[0] ^ arr[0]
// xors[2] = xors[1] ^ arr[1]
// xors[i] = xors[i-1] ^ arr[i-1]
// arr[l] ^ arr[l + 1] ^ ... ^ arr[r - 1] ^ arr[r]
// arr[0] ^ ... ^ arr[l - 1] ^ (arr[0] ^ ... ^ arr[l - 1]) ^ (arr[l] ^ arr[l + 1] ^ ... ^ arr[r - 1] ^ arr[r])
// arr[0] ^ ... ^ arr[l - 1] ^ arr[0] ^ ... ^ arr[r]
// xors[l] ^ xors[r + 1]
// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {

  const xors = new Array(arr.length + 1)
  xors[0] = 0
  for(let i = 0; i < arr.length; i++) {
    xors[i + 1] = xors[i] ^ arr[i]
  }
  const res = new Array(queries.length)
  
  for(let i = 0; i < queries.length; i++) {
    
    res[i] = xors[queries[i][0]] ^ xors[queries[i][1]]
    
  }
  return res
};
// @lc code=end

