//About fill and filter function

// var array=[2,3,4,5,6,3];//it will fill 0 in all the elements
// console.log(array.fill(0));


// var array=[2,3,4,5,6,3];
// console.log(array.fill("h"));//fill 'h' in all the element


var array=[2,3,4,5,6,3];
console.log(array.fill("h", 2)); //here 2 is the starting point


var array=[2,3,4,5,6,3];
console.log(array.fill("h", 2, 5));// h will be printed starting from 2 position and ending at 5-1 position. 


const mynum=[56,38,2,31,56,7,69,34,67]
const result= mynum.filter((num) => num!= 31);// filter returns the elements of an array that meet the condition specified in a callback function.
console.log(result);