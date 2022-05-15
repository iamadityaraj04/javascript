// array declaration

//1.
let students=["Aditya", "Rahul", "Amit","Shubham", "Ranvijay"];

//2.
let regNo=new Array(213, 453, 654);

//to access one element of array
console.log(students[2]);

//to access whole array
console.log(regNo);

//to update array value
regNo[1]=903;
console.log(regNo);

//to get length of array
console.log(students.length);

//to add element in last
regNo.push(547);
console.log(regNo);

//to add element in first
students.unshift("Rohit");
console.log(students);

//to remove element from last
students.pop();
console.log(students);

//to remove element from first
students.shift();
console.log(students);

//to find position of element
console.log(students.indexOf("Amit"));

//to join element of array
console.log(students.join('-'));

//multi-dimensional array
let car=[
    ["Swift","Ignis","WaganR"],
    ["i10", "i20", "Alcazar", "Creta"],
    ["x7","x6"],
    ["Audi A5"]
];
console.log(car);

car.forEach(element => {
    console.log(`Element is ${element}`);
});