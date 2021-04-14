var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ''
  let ans = strs[0]
  for(let i = 1; i < strs.length; i++) {
    ans = longestCommonPrefixForTwo(ans, strs[i])
  }
  return ans
};

function longestCommonPrefixForTwo(s1, s2) {
  let len = s1.length > s2.length ? s2.length : s1.length
  let i = 0
  for(; i < len; i++) {
    if(s1[i] != s2[i]) {
      return s1.substring(0, i)
    }
  }
  if(i === len) {
      return s1.substring(0, i)
  }
  return ''
}