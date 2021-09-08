// поиск в ширину в бинарном дереве

//создадим бинарное дерево используя ООП инструменты JS

// функция -- конструктор
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// схема будущего дерева
//            a
//          /   \
//        b       c
//      /  \       \
//      d   e       f

// создаем ноды
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);

// присваиваем детей
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Поиск в ширину обходит все ноды на уровне прежде чем двигаться глубже.
// используем очередь QUEUE, добавляем новые элементы в конец, забираем в работу с головы.
// инициализируем очередь, засовываем в нее корневую ноду
// начинаем обход. Когда очередь пуста -- алгоритм завершен.

// эта функция обходит дерево и выводит все его элементы в консоль.
const breadthFirstPrint = (root) => {
    const queue = [root];

    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);

        if (curr.left !== null) {
            queue.push(curr.left);
        }

        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
};

breadthFirstPrint(a);

// эта функция обходит дерево и суммирует содержимое всех нод.
const totalSum = (root) => {
    const queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        const curr = queue.shift();
        sum += curr.val;

        if (curr.left !== null) {
            queue.push(curr.left);
        }

        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }

    return sum;
};

let test = totalSum(a);
console.log(test);
