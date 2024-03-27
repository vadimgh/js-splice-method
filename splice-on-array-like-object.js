const arrayLikeObject = {
  length: 3,
  0: 'one',
  1: 'two',
  2: 'three'
};

Array.prototype.splice.call(arrayLikeObject, 4, 0, 'four', 'five');

console.log(arrayLikeObject);
