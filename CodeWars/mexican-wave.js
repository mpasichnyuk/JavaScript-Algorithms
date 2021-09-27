function wave(str) {
    if (str.length === 0) return [];
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        str = str.split("");
        str[i] = str[i].toUpperCase();
        str = str.join("");

        result.push(str);

        str = str.split("");
        str[i] = str[i].toLowerCase();
        str = str.join("");
    }
    return result;
}

console.log(wave("hello friend"));
