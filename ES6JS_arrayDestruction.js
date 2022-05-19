let arr=["aditya", 11911045, "CSE", "LPU",];

//normal accessing
/*let name=arr[0];
let regno=arr[1];
let course=arr[2];
let college=arr[3];*/


//array destruction
/* let[name,regno,course,college,place]=arr;
console.log(college); */

//here place will show undefined because its value is not present in array.
//console.log(place);

//we can also assign default value
let[name,regno,course,college, place="Jalandhar"]=arr;
console.log(place);

function book() {
    return ["Advanced JS",400]
}
let[book_title,price]=book();
console.log(book_title);