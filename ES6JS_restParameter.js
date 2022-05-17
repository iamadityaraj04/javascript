//in rest parameter we can declare as many parameter as we want.

/*function sum(a,b) {
    console.log(a+b);
}
//here we can pass only two parameter
sum(223,32);*/

// ...para makes a array to store data
/*function sum(...para) {
    console.log(para);
}
sum();
sum(2,3,5,6);*/

function sum(...para) {
    let tot=0;
    for (let index = 0; index < para.length; index++) {
        tot+=para[index];
    }
    console.log(tot);
}
sum(2,36,5,65);

let array1=[32,43,54,6];
let array2=[33,3,5,6,3,32];
//here both array1 and array2 will combine
//it is also called spread operator.
let array3=[...array1,...array2];
console.log(array3);