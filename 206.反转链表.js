function reverseList(head) {
  let cur = head
  let pre = null
  while (cur) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
  }
  return pre
}