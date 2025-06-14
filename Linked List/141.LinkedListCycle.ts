/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */


// My solution - O(n) time, O(n) space
function hasCycle(head: ListNode | null): boolean {
    const ListNodeUnique = new Set<ListNode>();
    while (head) {
        if (ListNodeUnique.has(head)) return true;
        ListNodeUnique.add(head);

        // duyệt từng node
        head = head.next;
    }

    return false;
};

// slow and fast pointer solution - O(n) time, O(1) space
function hasCycle2(head: ListNode | null): boolean {
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while(fast && fast.next) {
        slow = slow!.next
        fast = fast.next.next
        if (fast === slow) return true
    }

    return false;
}
