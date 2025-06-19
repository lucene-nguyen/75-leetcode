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

// mine
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const values: number[] = [];

//     while (list1) {
//         values.push(list1.val);
//         list1 = list1.next;
//     }
//     while (list2) {
//         values.push(list2.val);
//         list2 = list2.next;
//     }

//     const valuesSorted = values.sort((a, b) => a - b);
//     let listNoteSorted = valuesSorted.length ? new ListNode(valuesSorted[0]): null;
//     const head = listNoteSorted;
//     for (let i = 1; i < valuesSorted.length; i++) {
//         listNoteSorted!.next =  new ListNode(valuesSorted[i]);
//         listNoteSorted = listNoteSorted!.next
//     }

//     return head;
// };


// open ai
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