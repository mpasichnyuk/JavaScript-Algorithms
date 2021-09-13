class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

// }

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const print = (head) => {
    if (head === null) return;
    console.log(head.val + "=> ");
    print(head.next);
};

const reverseList = (head) => {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const reverseListRec = (curr, prev = null) => {
    if (curr === null) {
        return prev;
    }
    const next = curr.next;
    curr.next = prev;
    return reverseListRec(next, curr);
};

print(a);
// a, b, c, d
// const newHead = reverseList(a);
const newHead = reverseListRec(a);
console.log("reversing...");
print(newHead);
