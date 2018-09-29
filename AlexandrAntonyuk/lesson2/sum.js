// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// function add(n) {
//     if (n != arr.length) {
//         sum += arr[n];
//         return add(n+1);
//     }
//     else {
//         return sum;
//     }
// }
// add(0);
// console.log(sum)


var arr = [1, 2, 3];
let sum = 0;
arr.forEach(function(item) {
    sum +=item;
});
console.log(sum)