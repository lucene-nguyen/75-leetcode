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
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// ex: const head = new ListNode(1, new ListNode(2, new ListNode(3, null)));
function reverseList(head: ListNode | null): ListNode | null {
    let node: ListNode | null = null
    let temp: any = null
    while(head){
        temp = head.next;
        head.next = node
        node = head
        head = temp
    }
    return node
};