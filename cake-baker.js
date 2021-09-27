// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
    let keys = Object.keys(recipe);

    // for (let i = 0; i < keys.length; i++) {
    //     if ()
    // }
    let temp = 0;
    let finalAnswer = 0;

    for (let key in recipe) {
        if (available[key]) {
            console.log(
                `looking for ${key}, needed ${recipe[key]}, available ${available[key]}`
            );

            temp = Math.floor(available[key] / recipe[key]);
            if (temp === 0) return 0;
            console.log(`can bake ${temp} cakes`);
            if (temp > 0 && finalAnswer === 0) finalAnswer = temp;
            console.log(` final answer is ${finalAnswer}`);
            if (temp > 0 && temp < finalAnswer) finalAnswer = temp;
            console.log(`and set final answer to ${finalAnswer}`);
        }

        if (!available[key]) {
            console.log(`cannot find the ${key} in availiable`);
            return 0;
        }
    }
    return finalAnswer;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
test = cakes(recipe, available);
console.log(test);
