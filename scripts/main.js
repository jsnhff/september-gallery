// Base JS file
// Author: Jason Huff

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

    // return time
    var day = nd.getDay();
    var hour = nd.getHours();
    var t = {day:day, hour:hour};
    return t 
}

//alert(calcTime('New York', '+4'));
var currentNYCTime = calcTime('New York', '+4');

// for each open time entry
// if day of the week equals day x and time is less than x and greater than y
// show open sign
// if not show nothing

var galleryHours = [];

var entry1 = {day:4, open_time:"12", close_time:"18"};
var entry2 = {day:5, open_time:"12", close_time:"18"};
var entry3 = {day:6, open_time:"12", close_time:"18"};
var entry4 = {day:7, open_time:"12", close_time:"18"};

galleryHours.push(entry1);
galleryHours.push(entry2);
galleryHours.push(entry3);
galleryHours.push(entry4);

for (i = 0; i < galleryHours.length; i++) {
    if ( currentNYCTime.day == galleryHours[i].day &&
            galleryHours[i].open_time <= currentNYCTime.hour &&
            galleryHours[i].close_time >= currentNYCTime.hour ){
        $("#js-gallery-hours").removeClass("white").text("Open");
    };
}

// Hours assumption:
// 5 - Friday, 11:00am to 5:00pm
// 6 - Saturday, 12:00 to 6:00pm
// 0 - Sunday, 10:00am to 3:00pm
