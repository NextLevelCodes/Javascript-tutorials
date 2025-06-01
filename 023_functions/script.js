
// console.log("I am a Satis Chaudhary");
// console.log("I am a Frontend Developer");

// console.log("I am a Satis Chaudhary");
// console.log("I am a Frontend Developer");

// console.log("I am a Satis Chaudhary");
// console.log("I am a Frontend Developer");

// Named Function 
// function defination 
// function printUserDetails(userName ,role){
//     // console.log(role)
//     // console.log(userName);

//     // if(role === undefined){
//     //     role = "Backend Developer"
//     // }
//     console.log(`I am a ${userName || "Nothing"}`);
//     console.log(`I am a ${role || "Backend Developer"}`);
//     // return "Hello";
// }
// function call/invoke 
// printUserDetails();
// printUserDetails('Sandeep');
// printUserDetails('Sanju',"Game Developer");

function printUserDetails(userName="NextlevelCodes"){
    console.log(`I am a ${userName}`);
}
const users = ["Satis","Sandeep","Sanju","Yogesh","Toran"]
for(let i = 0;i<users.length;i++){
    printUserDetails(users[i])
}

