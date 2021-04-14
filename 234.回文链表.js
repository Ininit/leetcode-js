// 1 - 2 - 3 - 2 - 1
// 判断回文链表
// 太秀了，链表后续遍历，使用函数调用栈作为后序遍历栈
function isPalindrome(head) {
  let left = head

  function traverse(right) {
    if(right == null) return true
    let res = traverse(right.next)
    res = res && (right.val === left.val)
    left = left.next
    return res
  }

  return traverse(head)

}

function isPalindrome2(head) {
  let slow = head
  let fast = head
  while(fast && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  if(fast != null) {
    slow = slow.next
  }
  
  // 反转链表
  function reverseList(head) {
    let prev = null
    let cur = head
    while (cur != null) {
      let temp = cur.next
      cur.next = prev
      prev = cur
      cur = temp
    }
    return prev
  }

  const reList = reverseList(slow)
  while (reList != null) {
    if(reList.val !== head.val) {
      return false
    }
    reList = reList.next
    head = head.next
  }
  return true

}