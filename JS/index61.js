const weekdayNumber = 1;
message = null;
switch (weekdayNumber) {
    case "1":
        message = "Today it's Monday";
        
        break;
        case "2":
        message = "Today it's Tuesday";
        
        break;

    default:
        message = "invalid";
        break;
}
console.log(message);

