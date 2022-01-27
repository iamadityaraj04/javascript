// About Switch and arrow funtion 



// function getUserRole(name,role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin and have all access.`
//             break;
//         case "sub-admin ":
//             return `${name} is sub-admin and have only inserting and deleting access.`
//             break;
//         case "user":
//             return `${name} is user and have login and signup access.`
//             break;
//         default:
//             break;
//     }
// }
// console.log(getUserRole("Aditya","admin")); 


// var getUserRole=(name,role)=>{
//     switch (role) {
//         case "admin":
//             return `${name} is admin and have all access.`
//             break;
//         case "sub-admin ":
//             return `${name} is sub-admin and have only inserting and deleting access.`
//             break;
//         case "user":
//             return `${name} is user and have login and signup access.`
//             break;
//         default:
//             break;
//     }
// }
// console.log(getUserRole("Aditya","admin")); 

// function isEven(num) {
//     if (num%2===0) {
//         return true;
//     }
//     return false;
// }
// console.log(isEven(34));

// var result = [2,4,7,8].every(isEven);//this will check for each element of the array
// console.log(result);


var result = [2,4,6,8].every((a)=>{ //if want to use return '{}' brackets are necessary
    return a%2===0;
 });
console.log(result);


