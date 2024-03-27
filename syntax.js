const numbers = [1, 3, 4, 5];

numbers.splice(1, 0, 2);

console.log(numbers);

const numbers2 = [1, 3, 4, 5];

numbers2.splice(-3, 0, 2);

console.log(numbers2);

const numbers3 = [2, 3, 4, 5];

numbers3.splice(-5, 0, 1);

console.log(numbers3);

const numbers4 = [1, 2, 3, 4, 5];

numbers4.splice(5, 0, 6, 7, 8);

console.log(numbers4);

const numbers5 = [1, 2, 3, 4, 5];

numbers5.splice();

console.log(numbers5);

const numbers6 = [1, 2, 3, 4, 5];

numbers6.splice(1, 5);

console.log(numbers6);

const numbers7 = [1, 2, 3, 4, 5];

numbers7.splice(1, Infinity);

console.log(numbers7);

const numbers8 = [1, 2, 3, 4, 5];

numbers8.splice(5, -1, 6);

console.log(numbers8);