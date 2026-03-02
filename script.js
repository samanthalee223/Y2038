const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));
// notation: Date.UTC(year, monthIndex, day, hours, minutes, seconds)

console.log(utcDate1.toUTCString());
// Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// Expected output: "Sun, 31 Dec 1899 00:00:00 GMT"

Math.floor((new Date()).getTime() / 1000);

console.log((new Date()));



// clock from portfolio website

function updateClock() {
    const now = new Date();
    // Specify the target time zone using the IANA time zone identifier (e.g., 'America/New_York')
    const options = {
        timeZone: 'UTC', // removing this makes the clock auto sync to computer's timezone
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false // Set to false for 24-hour format
    };
    
    // Format the time string
    const timeString = now.toLocaleString('en-US', options);

    // Update the HTML element
    document.getElementById('txt').textContent = timeString + " " + "EST";
}

// Update the clock immediately on page load
updateClock();

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);



const event = new Date('0');
//console.log(event.toUTCString());

const test = Date.now();
//console.log(test); // returns the big decimal

Math.floor((new Date()).getTime() / 1000); 
//console.log((new Date()));

const start = Date.now();
const end = new Date('2038-01-19T03:14:07');
//console.log(end.toUTCString());





function convertSeconds(seconds) {
    const date = new Date(seconds * 1000);
    const years = Math.floor(seconds / (365 * 24 * 60 * 60));
    const days = date.getUTCDate() - 1;
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const remainingSeconds = date.getUTCSeconds();

    return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${remainingSeconds} seconds`;
}


// Set the date we're counting down to Jan 19, 2038 03:14:07 UTC / 2038-01-19T03:14:07
var countDownDate = new Date('2026-02-26T17:00:07').getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
                    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
                    
    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (365 * 1000 * 60 * 60 * 24));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = years + "y " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
                    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "THE WORLD HAS ENDED";
    }
}, 1000);

