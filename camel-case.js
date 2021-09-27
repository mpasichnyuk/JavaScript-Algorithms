// задача с CodeWars, написать функцию перевода из SnakeCase в CamelCase

function toCamelCase(str) {
  str = str.split("");
  console.log(str);
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "-" || str[i] === "_") {
      str[i + 1] = str[i + 1].toUpperCase();
      str.splice(i, 1);
      console.log(str);
    }
  }
  str = str.join("");
  return str;
}

console.log(toCamelCase("the_stealth_warrior"));
