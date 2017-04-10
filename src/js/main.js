/*$(document).ready(function () {
	// Add smooth scrolling to all links
	$("a").on('click', function (event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});*/

$(document).ready(function() {
	var $toggleButton = $('#three-lines-nav-button');
	$toggleButton.on('click', function() {
		$(this).toggleClass('open');
		$("#main-nav-ul").toggleClass('openUL')
	});
});

var height = 0;
var w = 0;
var slideshow_height = function() {
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	height = (1080 / 1920) * w;
	var arrow_height_width = (height / 1080) * 128;
	document.getElementById("slideshow").style.height = height.toString() + 'px';
	document.getElementById("slideshow-arrow-wrapper").style.height = height.toString() + 'px';
	$('.arrow_img').css({
		'height': arrow_height_width,
		'width': arrow_height_width
	});
	/*if (w <= 675) {
		document.getElementById("slideshow-arrow-wrapper").style.marginTop = '135px';
		$('.slideshow-pic').css('top', '135px');
		document.getElementById("slideshow").style.height = (height + 135).toString() + 'px';
	} else {
		document.getElementById("slideshow-arrow-wrapper").style.marginTop = '0';
		$('.slideshow-pic').css('top', '0');
	}*/
	document.getElementById("slideshow").style.marginTop = '70px';
	$('.slideshow-pic').css('top', '70px');
};
slideshow_height();
$(window).resize(slideshow_height);
var slideshow_pics = ["1", "2"];
var pic_number = 0;
var timeout = 0;
$('.main-nav-li').hover(function() {
	if ($(this).attr('id') === undefined) {
		$(this).find('ul').css({
			'height': '70px',
			'opacity': '1'
		});
	}
	/*if (w <= 675 && $(this).attr('id') === undefined) {
		$('.slideshow-pic').css('top', '205px');
		console.log($(this).attr('id'));
		console.log(document.getElementById("slideshow").style.height);
		document.getElementById("slideshow").style.height = (parseFloat(document.getElementById("slideshow").style.height) + 70).toString() + 'px';
		document.getElementById("slideshow-arrow-wrapper").style.marginTop = '205px';
		console.log(document.getElementById("slideshow").style.height);
	}*/
}, function() {
	if ($(this).attr('id') === undefined) {
		$(this).find('ul').css({
			'height': '0',
			'overflow': 'hidden',
			'opacity': '0'
		});
	}
	/*if (w <= 675 && $(this).attr('id') === undefined) {
		$('.slideshow-pic').css('top', '135px');
		document.getElementById("slideshow").style.height = (height + 135).toString() + 'px';
		document.getElementById("slideshow-arrow-wrapper").style.marginTop = '135px';
		document.getElementById("slideshow-arrow-wrapper").style.height = height.toString() + 'px';
	}*/
});
var timeout_start = function() {
	console.log("timeout_start");
	timeout = setInterval(function() {
		slideshow_forward(false);
	}, 6000);
};
var slideshow_forward = function(click) {
	console.log("Hello");
	document.getElementById("pic" + slideshow_pics[pic_number]).style.opacity = 0;
	pic_number = pic_number + 1;
	if (pic_number >= slideshow_pics.length) {
		pic_number = 0;
	}
	document.getElementById("pic" + slideshow_pics[pic_number]).style.opacity = 1;
	if (click === true) {
		clearTimeout(timeout);
		timeout_start();
	}
};
var slideshow_backward = function() {
	console.log("Hello");
	document.getElementById("pic" + slideshow_pics[pic_number]).style.opacity = 0;
	pic_number = pic_number - 1;
	if (pic_number < 0) {
		pic_number = slideshow_pics.length - 1;
	}
	document.getElementById("pic" + slideshow_pics[pic_number]).style.opacity = 1;
	clearTimeout(timeout);
	timeout_start();
};
slideshow_forward(false);
timeout_start();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-white", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-white";
}