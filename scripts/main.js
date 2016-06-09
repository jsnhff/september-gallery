// Base JS file
// Author: Jason Huff
//


// Calculate the time zone for NYC
function calcTime(city, offset) {
    // create Date object for current location
        var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city"+ city +" is "+ nd.toLocaleString()+ " day num "+ nd.getDay();
}

alert(calcTime('New York', '+4'));

// for each open time entry
// if day of the week equals day x and time is less than x and greater than y
// show open sign
// if not show nothing

for (i = 0; i < galleryHours.length; i++) {
    console.log(i);
}

// Hours assumption:
// 5 - Friday, 11:00am to 5:00pm
// 6 - Saturday, 12:00 to 6:00pm
// 0 - Sunday, 10:00am to 3:00pm
