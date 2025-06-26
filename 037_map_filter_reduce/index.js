
// let colors = ["Red","Blue","Green","Black","White"];

// colors.forEach((clr,index,array)=>{
//     console.log(clr,index,array);
// })
// colors.forEach((clr)=>{
//     console.log(clr);
//     return "Hello";
// })

// map 

// const result = colors.map((clr,index,array)=>{
//     console.log(clr,index,array);
//     return {
//         color:clr
//     };
// })

// const filteredColors = colors.filter((element,index,array)=>{
//     console.log(element.includes("B"),index,array);
//     return element.includes("B");
// })

// const users = [
//     {
//         name:"Satis",
//         age:25,
//         role:"Frontend Developer",
//         address:"Ithari"
//     },
//      {
//         name:"NextlevelCodes",
//         age:22,
//         role:"Full stack Developer",
//         address:"Biratnagar"
//     },
//      {
//         name:"Yogesh",
//         age:17,
//         role:"Backend Developer",
//         address:"Ithari"
//     },
//      {
//         name:"Sandeep",
//         age:20,
//         role:"Backend Developer",
//         address:"Chitwan"
//     },
//      {
//         name:"Sanju",
//         age:23,
//         role:"HR",
//         address:"Kathmandu"
//     },
// ]

// const mappedUsers = users.map((currentElem)=>{
//     console.log(currentElem);
//     return {
//         name:currentElem.name,
//         role:currentElem.role
//     }
// }).filter((user)=>{
//     return user.role === "Backend Developer"
// }).map((user)=>{
//     return {
//         name:user.name
//     }
// })


// const numbers = [100,2,3]

// const result = numbers.reduce((acc,currentvalue)=>{
//     // console.log(acc,currentvalue)
//     // console.log(acc);
//     // console.log(currentvalue);
//     debugger
//     return acc + currentvalue
// },10)

let products = [
    {
        name:"Dell laptop",
        price:10
    },
    {
        name:"HP Laptop",
        price:20

    },
      {
        name:"Apple Laptop",
        price:30

    }
]

const subtotal = products.reduce((acc,prod)=>{
   return acc.price + prod.price
})