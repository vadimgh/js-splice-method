const numbers = [1, 2, 3, 4, 5];

const deletedNumbers = numbers.splice(1, 3);

console.log(deletedNumbers);

const numbers2 = [2, 3, 4, 5];

const deletedNumbers2 = numbers2.splice(0, 0, 1);

console.log(deletedNumbers2);
