function mergeKlist(lists) {
  if(lists.length == 0) return null
  if(lists.length == 1) return lists[0]
  let dummyHead = lists[0]
  for (let i = 1; i < lists.length; i++) {
      dummyHead = mergeList(dummyHead, lists[i])
  }
  return dummyHead
}
// 合并两个有序链表
function mergeList(head1, head2) {
  const dummyHead = new ListNode(0)
  let cur = dummyHead
  while (head1 != null && head2 != null) {
    if(head1.val < head2.val) {
      cur.next = head1
      head1 = head1.next
    } else {
      cur.next = head2
      head2 = head2.next
    }
    cur = cur.next
  }
  cur.next = head1 != null ? head1 : head2
  return dummyHead.next
}