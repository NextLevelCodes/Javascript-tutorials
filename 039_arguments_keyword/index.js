
function sumAll(){
    let total = 0
    for(let i = 0; i < arguments.length;i++){
        // total +=arguments[i];
        total = total + arguments[i];
    }
    return total
}
// const sumAll = function(){
//     console.log(arguments)
// }
// const sumAll = ()=>{
//     console.log(arguments)
// }
//  console.log(arguments)