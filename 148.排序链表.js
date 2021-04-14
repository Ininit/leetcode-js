function sortList(head) {
  // 递归结束条件
  if(head == null || head.next == null) {
    return head
  }

  // 找到链表中间节点并截断链表 & 递归下探
  let midNode = middleNode(head)
  let rightNode = midNode.next
  midNode.next = null

  // 合并链表
  return mergeList(sortList(head), sortList(rightNode))
}

// 876 寻找链表中间节点
function middleNode(head) {
  
  let slow = head
  let fast = head

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow

}

// 21 合并两个有序链表
function mergeList(head1, head2) {
  const dummyHead = new ListNode(-1)
  let cur = dummyHead
  while (head1 != null && head2 != null) {
    if(head1.val < head2.val) {
      cur.next = head1
      head1 = head1.next
    } else {
      cur.next = head2
      head2 = head2.next
    }
  }
  cur.next = head1 != null ? head1 : head2
  return dummyHead.next
}