
// //example question
// let i=0;
// for(;;){ //this statement will be skipped.
//     if(i>3) break;
//     console.log(i);
//     i++;
// }


//about for each loop
//it is generally used in case of array for performing any task with each and every element of the array.

const details=["Rajasthan","Delhi","Bihar","Jharkhand",2002,"Punjab"];

console.log(details.length);
console.log(details[details.length-1]);//it will give the last element of the array

details.forEach(s =>{console.log(s)});

//check it out
details.forEach((element, index, array) =>{
    console.log(`Element: ${element}, index: ${index}, array: ${array}`)
});



//about for of loop
//for of loop is majorly used for array
//used to fetch each element of the array

const names=["Facebook", "Youtube","Amazon", "Instagram", "Hotstar"];

for(const n of names){
    console.log(n);
}

//if we use "for in" loop for array, it will give its index as output
// const name=["Facebook", "Youtube","Amazon", "Instagram", "Hotstar"];
// for(const n in name){
//     console.log(n);
// }

//about for in loop
//for of loop is majorly used for object
const symbols={
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook"
}
for(const n in symbols){
    console.log(`Key is ${n} and value is ${symbols[n]}`);
}