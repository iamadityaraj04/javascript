// Objects in js



var user = {
    //here LHS is key and RHS is value
    firstName : "Aditya",
    lastName : "Raj",
    role : "SDE",
    empId : 11911045,
    linkedIn : true,
    courseList: [],
    buyCourse: function (courseName) { //this is how we define function inside object
        this.courseList.push(courseName);// here "this" keyword is used because we are calling courseList of the same object and this refers to the object user.
    },
    getCourseCount:function() {
        return `${this.firstName} has enrolled with ${this.courseList.length} courses. `;
    },
};

// console.log(user.firstName, user.lastName);
// console.log(user.empId);
// console.table(user);

console.log(user.getCourseCount());
user.buyCourse("Front-end Development with React Js");
user.buyCourse("Back-end Development with Node Js");
console.log(user.getCourseCount());
console.log(user.courseList);
