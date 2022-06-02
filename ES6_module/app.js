//import keyword is used so that we can import from other file.
import {name} from "./module/user.js";
console.log(name);
import {cook}from "./module/user.js";
cook();

import {withdraw} from "./module/accout.js";
withdraw();

// we can also rename the funtion and then call it
import {deposit as credit} from "./module/accout.js";
credit();


/*
    // above statement can also be written as
    import{withdraw,deposit} from "./module/accout.js";
    withdraw();
    deposit(); 
*/

//this will give error because age is not exported in the file
/* import { age } from "./module/user.js";
console.log(age); */