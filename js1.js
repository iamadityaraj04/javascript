// how to print output
console.log("hello world");
var myName="Aditya Raj";
var myRegNo=11911045;
var myAge=19;
var amIAditya=true;
console.log("Name: "+myName);
console.log("Reg. No.: "+myRegNo);
console.log("Age: "+myAge);

// variables in javascript 
console.log("Name: "+myName);
console.log(typeof(myName));//string
console.log("Reg. No.: "+myRegNo);
console.log(typeof(myRegNo));// number
console.log(amIAditya); //true
console.log(typeof(amIAditya));// boolean

// to check that it is no. or not
console.log(isNaN(myAge)); //false because it is a no.
console.log(isNaN(myName)); //true because it is a no.