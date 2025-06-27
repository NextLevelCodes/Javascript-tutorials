
// let numbers = [2,4,6,8,10];

// const result = numbers.some((elemnt)=>{
//     debugger
//     return elemnt > 4
// })
// console.log(result)

// const students = [
//     {
//         name:"Satis",
//         age:2,
//     },
//     {
//         name:"NextLevelCodes",
//         age:15,
//     },
//     {
//         name:"Sandeep",
//         age:17,
//     },
//     {
//         name:"Yogesh",
//         age:22,
//     },
//     {
//         name:"Sanju",
//         age:23,
//     },
// ]

// const isAdult = students.every((student)=>{
//     debugger
//     return student.age < 18
// });
let numbers = [2,4,6];


const result = numbers.every((num)=>{
    debugger
    return num % 2 ===0
})
console.log(result)
