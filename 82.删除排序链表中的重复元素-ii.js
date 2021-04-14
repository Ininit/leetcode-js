/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

  const dummy = new ListNode(-1, head)
  
  let cur = dummy
  
  while(cur.next) {

    if(cur.next.next && cur.next.val === cur.next.next.val) {
      const x = cur.next.val
      cur.next = cur.next.next.next
      while(cur.next && cur.next.val === x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }

  }
  return dummy.next
};
// @lc code=end

