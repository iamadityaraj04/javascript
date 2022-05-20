let student={
    name:"Aditya",
    regno: 11911045,
    course: "CSE",
    college: "LPU",
    place: "Jalandhar"
};
console.log(student.name);


let{name,regno,course:stream,college,place="punjab"}=student;
console.log(place);
// here i have assigned course to a new var
console.log(stream);

