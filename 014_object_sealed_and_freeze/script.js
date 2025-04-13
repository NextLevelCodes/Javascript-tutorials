const person = {
    name:"Satis",
    province:{
        provinceName:"Koshi",
        district:"Sunsari",
        location:{
            city:"Biratnagr"
        }
    } 
}
Object.seal(person)
// Object.freeze(person);
console.log(Object.isSealed(person));
// person.name = "Updated Satis"


const userName = "Satis"


