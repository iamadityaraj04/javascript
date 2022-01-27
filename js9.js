//About slice and splice

const users=["Sam", "Tim", "Rohit", "Ajay", "Mahi", "Tia", "Rode"];
//console.log(users.slice(2)); //it will delete the first n element(here n=2)


//console.log(users.slice(1, 3));//here it will slice from index 1 to 3-1 and give output 

users.splice(1, 3, "Adi");
console.log(users);//here it will remove elements from index 1 till 3 element and add Adi 