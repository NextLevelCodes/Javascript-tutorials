
// function greet(name){
//     // console.log(name)
//     // console.log(name());
//     // console.log(typeof name)
//     // console.log(`Hii ${name}`)
//     return function(){
//         console.log(name);
//     }
// }
// function hello(){
//     console.log("Hello")
// }
// const x = hello
// console.log(x);
// const g = greet("Satis");
// g()
// greet({name:"satis"});
// greet([1,2,3,4]);
// greet(x)


function remindMe(task){
    console.dir(task)
    task();
}
function drinkWater(){
    console.log("Drinking water....")
}
const DR = drinkWater;
DR.username = "NextlevelCodes"
remindMe(drinkWater)