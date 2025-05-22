let userName ="Satis"
let copieduserName = userName;
// let numbers = [10,20,30,40];
// const copiedNumbers = [...numbers]

const obj1 = {
    name:"NextLevelCodes",
    age:25,
    location:{
        city:"Ithari",
        pinCode:2332784
    }
}

// const obj2 = obj1
// const obj2 = {}
// Object.assign(obj2,obj1);

// const obj2 = {...obj1}
const obj2 = structuredClone(obj1);


