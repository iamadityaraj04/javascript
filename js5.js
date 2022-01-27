//About global context


// function is called before defining it. here function definition is saved as global context, therefore it is not giving error
// usually a global context is available to us in the browser
sayHello();

function sayHello() {
    console.log("Hi! Aditya Raj.");
}

var myName="Aditya";
if(myName===myName){
    console.log("A true statement");
}

//this will run in browser but will give error in compiler, because global context is different in node than browser
// var myName="Aditya";
// if(myName===window.myName){
//     console.log("A true statement");
// }

/* type of context 
    1) global context
    2) executing at that time
    
in above code funtion defination is global context but as soon as we call funtion, execution context comes in role for 
execution of whole funtion   

Two rules followed when there is execution context :
1) funtion declarations are scannned and made available(that's why in above example 'line 6' have executed)
2) variables declararions are also scanned but made undefined.
    */

// this will give output aditya raj
var name= "Aditya Raj";
console.log(name);
   
// but this will give undefined because of 2nd rule written above
console.log(name1);
var name1= "Aditya Raj";