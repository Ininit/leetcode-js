var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) return null

  let pA = headA
  let pB = headB
  // A+B == B+A 如果不相交最后都是指向null
  while (pA != pB) {
    pA = pA != null ? pA.next : headB
    pB = pB != null ? pB.next : headA
  }

  return pA
};