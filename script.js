

function clock() {
    var date = new Date;

    // console.log(date.getHours())

    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let format = " AM";

    // console.log(hours +":"+min+":"+ sec);

    if (hours == 0) {
        hours = 12;
        format = " PM"
    }



    if (hours > 11 && hours != 12) {
        hours = hours - 12;
        format = " PM"
    }

    hours = ("0" + hours).slice(-2);
    min = ("0" + min).slice(-2);
    sec = ("0" + sec).slice(-2);


    console.clear()

    document.querySelector(".time").innerText = (hours + ":" + min + ":" + sec + ":" + format)
}
console.clear()
setInterval(clock, 1000)




let date = new Date;


let days = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["january", "Fabruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let day = date.getDay();
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();


document.querySelector(".format").innerText = (days[day] + "," + d + " " + months[m] + " " + y)

// console.log(days[day])// monday
// console.log(d) // day 1
// console.log(months[m]) // day 1
// console.log(y) // day 1


// console.log() 