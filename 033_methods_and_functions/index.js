
// function greet(){
//     console.log("Hello Sir");
// }
// greet();

const person = {
    name:"Satis",
    walk:function abc(){
        console.log("Walking...")
        return 1
    },
    speak:function (){
        console.log("Speaking...")
    },
    eat(){
        console.log("Eating");
    }
}

const claculator ={
    add:function(x,y){
        return x+y;
    },
    multiply(num){
        return num*2
    }
}

console.log(claculator.add(10,20));
console.log(claculator.multiply(5))

// console.log(person.eat())
