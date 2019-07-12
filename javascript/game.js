var cars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var randCar = Math.floor(Math.random() * cars.length);
var choosenCar = cars[randCar];
console.log(choosenCar);

var i = 0
document.onkeypress = i++ 

document.onkeypress = hideConLog

function hideConLog() {

    console.log("hide");
    console.log(event.key);

    if (choosenCar === event.key) {
        console.log("You Are Correct");
    } else {
        console.log("You are Wrong");
    }
}

// var i
// i=0

// i=i+1 
// 1=0+1

// i=i+1 
// 2=1+1






