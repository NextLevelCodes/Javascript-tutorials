
const colors = ["Red","Blue","Green","Black","White"];

// for(const clr of colors){
//     console.log(clr)
// }

function printElement(x){
    console.log(x);
    return "Hello"
}
colors.forEach((clr)=>{
    console.log(clr)
    return clr.toUpperCase();
})
