// Base JS file
// Author: Jason Huff

// Make homepage background move around with the mouse
// Thanks: http://codepen.io/chrisboon27/pen/rEDIC
//$(document).ready(function() {
//    var movementStrength = 50;
//    var height = movementStrength / $(window).height();
//    var width = movementStrength / $(window).width();
//    $("body").mousemove(function(e){
//        var pageX = e.pageX - ($(window).width() / 2);
//        var pageY = e.pageY - ($(window).height() / 2);
//        var newvalueX = width * pageX * -1 - 25;
//        var newvalueY = height * pageY * -1 - 50;
//        $(".macro img").css("top", newvalueY+"px");
//        $(".macro img").css("left", newvalueX+"px");
//    });
//});

// Google Streetview embed
function initPano() {
    // Note: constructed panorama objects have visible: true
    // set by default.
    if ( $("#js_streetview").length){
    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('js_streetview'), {
            position: {lat: 42.3949987, lng: -73.6979503},
            pov: {heading: 228, pitch: 4.50},
            zoom: 1,
            addressControlOptions: {
                position: google.maps.ControlPosition.BOTTOM_CENTER
            },
            linksControl: false,
            panControl: false,
            enableCloseButton: false,
            zoomControl: false,
            fullscreenControl: false,
            address: false,
            disableDefaultUI: true
        });
    }
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

var entry1 = {day:5, open_time:"12", close_time:"18"};
var entry2 = {day:6, open_time:"12", close_time:"18"};
var entry3 = {day:0, open_time:"12", close_time:"18"};
var entry4 = {day:4, open_time:"12", close_time:"18"};

galleryHours.push(entry1);
galleryHours.push(entry2);
galleryHours.push(entry3);
galleryHours.push(entry4);

for (i = 0; i < galleryHours.length; i++) {
    //console.log(currentNYCTime);
    if ( currentNYCTime.day = galleryHours[i].day &&
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

// Scroll up to the top homie
// Thanks! https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 400) {
            $('#js_scroll-to-top').fadeIn();
        } else {
            $('#js_scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#js_scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});
