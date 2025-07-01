
function showName(userName){
    if(!userName){
        userName = "Guest"
    }
    console.log(`Welcome ${userName}!`)
}

function sum(x=0,y=0){
    return x + y
}