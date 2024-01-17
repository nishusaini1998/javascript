var d = new Date();
console.log(d.getDate());
var days = d.getDay();

let day;
switch(days){
    case 0: day = "sunday";
    break;
    case 1: day = "monday";
    break; 
    case 2: day = "tusday";
    break;
    case 3: day = "wendsaday";
    break;
    case 4: day = "thusday";
    break;
    case 5: day = "friday";
    break;
    case 6: day = "satarday";
    break;
    default: day = "nothing";
    break;

}
// console.log(day);
document.write(day);