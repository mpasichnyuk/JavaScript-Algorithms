function depthFirstSearch(graph, source) {
    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

function depthFirstRecursive(graph, source) {
    console.log("Recursive " + source);
    for (let neighbor of graph[source]) {
        depthFirstRecursive(graph, neighbor);
    }
}

const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};

depthFirstSearch(graph, "a");
depthFirstRecursive(graph, "a");
