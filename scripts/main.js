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


$("body").on("click", "#js-slideshow-trigger", "click", function() {
    event.preventDefault();
    var title = $(this).attr("data-title");
    var slideShows = $(".js-slideshow");

    //trigger slideshow with matching name
    $.each(slideShows, function(index, value) {
        var hidden = $(this).hasClass("display-none");
        var slideLeft = $(this).find("#js-left");
        var slideRight = $(this).find("#js-right");
        var close = $(this).find("#js-close");

        $(close).click(function() {
            $(this).addClass("display-none");
        });

        if (hidden == false){
            $(this).addClass("display-none");
        }

        var t = $(this).attr("data-title");
        var imgArray = $(this).find(".image");
        if (t == title) {
            // Slideshow magic
            var slideIndex = 1;

            $(slideLeft).click(function() {
                showDivs(slideIndex += -1);
            });

            $(slideRight).click(function() {
                showDivs(slideIndex += 1);
            });

            var showDivs = function(n) {
                var i;
                var x = imgArray;
                if (n > x.length) {slideIndex = 1} 
                if (n < 1) {slideIndex = x.length} ;
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none"; 
                }
                x[slideIndex-1].style.display = "block"; 
            }
             
            showDivs(slideIndex);
            // Show the matched slideshow
            $(this).removeClass("display-none");
        }
    });
});

