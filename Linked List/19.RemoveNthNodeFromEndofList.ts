function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const newHead = new ListNode(0,head);
    let slow: ListNode | null = newHead;
    let fast: ListNode | null = newHead;

    for (let i = 0; i < n; i++) {
        if (fast!.next) {
            fast = fast!.next;
        }
    }
    while (fast!.next) {
        slow = slow!.next;
        fast = fast!.next;
    }

    slow!.next = slow!.next ? slow!.next.next : null;
    return newHead.next;
};