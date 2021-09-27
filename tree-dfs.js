// обход бинарного дерева в глубину DEPTH FIRST
//

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

//            a
//          /   \
//        b       c
//      /  \       \
//      d   e       f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// реализация через цикл While
const sumTree = (root) => {
    const stack = [root];
    let sum = 0;
    while (stack.length > 0) {
        const curr = stack.pop();
        sum += curr.val;

        if (curr.left !== null) {
            stack.push(curr.left);
        }
        if (curr.right !== null) {
            stack.push(curr.right);
        }
    }
    return sum;
};

// реализация через рекурсию

const sumTreeRec = (root) => {
    if (root === null) return 0;

    return sumTreeRec(root.left) + root.val + sumTreeRec(root.right);
};

test1 = "loop while test " + sumTree(a);
test2 = "recursive test " + sumTreeRec(a);
console.log(test1, test2);
