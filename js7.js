// About this keyword
// to find out what is present in global context just print this keyword.
console.log("Line 3",this);// output will be empty scope in node engine
                  // and if we run it in any browser it will give access to window object 

// for all regular fn calls, this points to window object

// var user = {
//     firstName: "Aditya",
//     age: 19,
//     greet: function () {
//         console.log("Line 12",this);
//         function sayHello() {
//             console.log("Hello! Aditya");
//             console.log("Line 15",this);
//         }
//         sayHello();
//     },
// };
// user.greet();//this is not regular fn call because it is called with help of object

function say_Hello() {//it is regular function
    console.log("Hello! Aditya");
    console.log("Line 24",this);
}
say_Hello();//it is regular function  call, therefore "this" of this fn will points to window object