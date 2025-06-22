function reorderList(head: ListNode | null): void {

    // find middle point of the list
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next && fast.next.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let original : ListNode | null = head;
    let secondHalf: ListNode | null = slow!.next;
    slow!.next = null; // split the list into two halves

    function reverseList(head: ListNode | null): ListNode | null {
        let node: ListNode | null = null
        let temp: any = null
        while (head) {
            temp = head.next;
            head.next = node
            node = head
            head = temp
        }
        return node
    };

    let reverse: ListNode | null = reverseList(secondHalf);


    let reorderList: ListNode | null = new ListNode(0);
    head = reorderList;

    // merge the two halves
    while(original && reverse) {

        reorderList!.next = original ;
        reorderList!.next!.next = reverse;
        reorderList = reorderList!.next!.next;

        original  = original!.next;
        reverse = reverse!.next;
    }

    if (original) reorderList.next = original; // if the first half is longer, append the remaining nodes
    else if (reverse) reorderList.next = reverse; // if the second half is longer, append the remaining nodes

    head = head.next;
};