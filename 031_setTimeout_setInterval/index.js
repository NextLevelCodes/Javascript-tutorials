
function Hello1(){
    console.log("Hello 1 ")
}
function Hello2(){
    console.log("Hello 2 ")
}
function Hello3(){
    console.log("Hello 3 ")
}
setTimeout(Hello1,2000);

// console.time();
for(let i = 0; i < 100; i++){
    console.log(i);
}
// console.timeEnd();
// setTimeout(Hello2,4000);

// const timeOutid = setTimeout(Hello3,6000);
// // clearTimeout(timeOutid);
// console.log(timeOutid);

const intervalId = setInterval(Hello1,3000);
// clearInterval(intervalId)
// console.log(intervalId);

console.log("Program End");