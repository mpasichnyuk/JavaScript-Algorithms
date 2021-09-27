//обход бинарного дерева в глубину

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

// поиск в глубину DEPTH-FIRST исследует одну ветку дерева, пока не дойдет до ее конца.
// используем стек STACK, первый элемент в стеке: ROOT нода.
// забираем элемент сверху стека, исследуем
// если у элемента есть дети -- кладём их в стек
// если сначала класть правый элемент, а затем левый - левая часть дерева будет исследована первой.
// если стек опустел -- алгоритм завершен.

const depthFirstPrint = (root) => {
    const stack = [root];
    // используем методы push и pop для работы с массивом как со стеком
    while (stack.length > 0) {
        const curr = stack.pop();
        // исследуем ноду когда она покидает стек
        console.log(curr.val);
        // кладем ее детей в стек
        if (curr.right !== null) {
            stack.push(curr.right);
        }
        if (curr.left !== null) {
            stack.push(curr.left);
        }
    }
};

depthFirstPrint(a);

// O(n) затраты по времени
// O(n) затраты памяти (в худшем случае массив будет содержать всё дерево)

// рекурсивный вариант
const preOrder = (root) => {
    // базовый кейс, если корень пусть
    if (root === null) return;

    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
};

preOrder(a);
// O(n) time, O(n) memory

//pre-order -> PARENT BEFORE CHILDREN, РОДИТЕЛЬ ПОТОМ ДЕТИ
//post-order -> CHILDREN BEFORE MYSELF, ДЕТИ ПОТОМ РОДИТЕЛЬ
//in-the-order -> leftChild - SELF - RightChild, левый ребенок - родитель - правый ребенок
