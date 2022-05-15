// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...nums) => nums.reduce((num, min) => num < min ? num : min);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });