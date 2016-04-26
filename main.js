console.log("boop");


var dvn = "David Nash";
var dev = "Developer | Designer";
var nmplt = $("#nameplate");
var devplate = $("#devplate");


$(document).ready(function() {
	nameType(dvn, 0, nmplt);
	nameType(dev, 0, devplate);
	setInterval('markerBlink()', 600);
});

function nameType(text, n, loc) {
	if (n < text.length+1) {
		loc.html(text.substring(0, n+1));
		n++;
		setTimeout(function () {
			nameType(text, n, loc);
		}, 100);
	} else {

	}
}

function markerBlink() {
	$('#marker').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}