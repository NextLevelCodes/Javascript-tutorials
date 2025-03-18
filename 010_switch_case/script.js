// let dayNumber = 8;

// switch(dayNumber){
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//      case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid Day");
// }

let role="user"
debugger
switch (role) {
    case 'admin':{
        console.log("You have full access");
        break;
    }
    case 'user':{
        console.log("You don't have permission to access this resources");
        break;
    }
    case 'editor':{
        console.log("You have edit access only");
        break;
    }
    case 'viewer':{
        console.log("You have view access only");
        break;
    }

    default:
        console.log("Invid role")
        break;
}