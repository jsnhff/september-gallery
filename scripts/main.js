// Base JS file
// Author: Jason Huff

// Create dynamic logo
var svgz = $("div#js-logo svg");

// Color one of the letters in each SVG letter group
function colorLetters(object) {
    var randomNum = Math.floor((Math.random() * 3) + 0);
    var l = $(object).children();
    
    for (n=0; n < l.length; n++) {
        if (n == randomNum ) {
            $(l[n]).attr("fill","#000000");
            $(l[n]).attr("fill-opacity","1.0");
        }
    }
}

// Loop thourgh each SVG letter group
for (i=0; i < svgz.length; i++){
    colorLetters(svgz[i]);
}

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
        $(".js-gallery-hours").removeClass("display-none");
    };
}

// Smooooth scrolling from Chris Coyier. Thanks.
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
        $('html, body').animate({
            scrollTop: (target.offset().top-80)
        }, 500);
        return false;
    }
    }
    });
});
