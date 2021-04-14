function findCenterList(head) {

  let slow = head
  let fast = head
  while(fast && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 如果 fast 不等于 null，说明是奇数个
  if(fast != null) {
    slow = slow.next
  }

  return slow
}