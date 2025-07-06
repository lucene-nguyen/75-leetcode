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

//[[1,4,5],[1,3,4],[2,6]]
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if(lists.length === 0) return null
    while (lists.length > 1) {
        const newList: Array<ListNode | null> = [];
        for(let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = (i+1 <lists.length) ? lists[i+1] : null

            newList.push(mergeTwoLists(l1, l2));
        }
        lists = newList;
    }

    function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        let current: ListNode = new ListNode(0);
        const head = current;

        while (list1 && list2) {

            if (list1.val < list2.val) {
                current.next = list1;
                list1 = list1.next
            } else {
                current.next = list2;
                list2 = list2.next
            }
            current = current.next;
        }

        current.next = list1 || list2;
        return head.next;
    };

    return lists[0];
};