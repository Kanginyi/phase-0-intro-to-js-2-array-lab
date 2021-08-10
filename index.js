// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
    cats.push(name);
    return cats;
}

const destructivelyPrependCat = (name) => {
    cats.unshift(name);
    return cats;
}

const destructivelyRemoveLastCat = () => {
    cats.pop();
    return cats;
}

const destructivelyRemoveFirstCat = () => {
    cats.shift();
    return cats;
}

const appendCat = (name) => {
    let z = [...cats];
    z.push(name);
    return z;
}

const prependCat = (name) => {
    let z  = [...cats];
    z.unshift(name);
    return z;
}

const removeLastCat = () => {
    let z  = [...cats];
    z.pop();
    return z;
}

const removeFirstCat = () => {
    let z  = [...cats];
    z.shift();
    return z;
}