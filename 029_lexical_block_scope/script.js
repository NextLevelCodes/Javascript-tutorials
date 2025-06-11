// // debugger
// let userName = "NextLevelCodes";
function parent(){
    let parentName = "Satis";
    let parentAge = 25;
    {
        var x = 10;
        console.log(x);
    }
    console.log(x);
    console.log("Parent",parentName);
    function child(){
        let childName = "Eku"
        console.log(parentName,parentAge);
        console.log("Child",childName);
    }
    return child;

}
parent();

// const c = parent();
// c()

// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

// function makeFunc() {
//   let name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   name = "Satis"
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

