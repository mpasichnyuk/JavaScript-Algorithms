class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if (this.head === null) {
            this.head = new Node(val);
            return;
        }

        this._append(val, this.head);
    }
    // вспомогательная функция для рекурсивных вызовов метода Append
    _append(val, curr) {
        if (curr.next === null) {
            curr.next = new Node(val);
            return;
        }

        this._append(val, curr.next);
    }

    print() {
        const output = this._print(this.head);
        console.log(output);
    }
    // вспомогательная функция для рекурсивных вызовов метода Print
    _print(curr) {
        if (curr === null) return "";
        return curr.val + "-> " + this._print(curr.next);
    }

    contains(target) {
        return this._contains(target, this.head);
    }
    // вспомогательная функция для рекурсивных вызовов метода поиска элемента - Contains
    _contains(target, curr) {
        if (curr === null) return false;
        if (curr.val === target) return true;
        return this._contains(target, curr.next);
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.head);
list.print();
console.log(list.contains(9));
console.log(list.contains(2));

const sumListRecursive = (head) => {
    if (head === null) return 0;
    return head.val + sumListRecursive(head.next);
};

const sumListInterative = (head) => {
    let sum = 0;
    let curr = head;
    while (curr !== null) {
        sum += curr.val;
        curr = curr.next;
    }
    return sum;
};

console.log(sumListInterative(list.head));
console.log(sumListRecursive(list.head));
