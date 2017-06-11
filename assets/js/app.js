/*
 Require Basic Modules
 */
 $ = jQuery = require('jquery');




/**
Nprogress loading bar
*/
// var NProgress = require('NProgress');

/**
 * partcles js load
 */

// require('particles.js');

/**
 * Bootstrap loading
 */

var isMobile = false; //initiate as false
// device detection
if (/Mobi/.test(navigator.userAgent))
	isMobile = true;


 var bootstrap = require('bootstrap');

 var videojs = require('video.js');


// var player = videojs('my-video');


$(function(){
	// video2[0].play();
	// video3[0].play();
})

// var videos = $('#my-video_html5_api'),
// fraction = -0.2;
// function checkScroll() {

//     for(var i = 0; i < videos.length; i++) {

//         var video = videos[i];

//         var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
//             b = y + h, //bottom
//             visibleX, visibleY, visible;

//             visibleX = (0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
//             visibleY = (0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

//             visible = visibleX * visibleY / (w * h);
//            // console.log('scroll='+visible);
//             if (visible < fraction && visible > -1.2) {
//                 video.play();
//             } else {
//                 video.pause();
//             }

//     }

// }
if(!isMobile)
{
	// window.addEventListener('scroll', checkScroll, false);
	// window.addEventListener('resize', checkScroll, false);

	$('#con_hit').attr('href', 'https://mail.google.com/mail/?view=cm&ui=2&tf=0&fs=1&to=info@hyperloopindia.in&su=Hello Hyperloop India!&body=Send your query to us.');
}
else
{
	$('#con_hit').attr('href', 'mailto:info@hyperloopindia.in?subject=Hello Hyperloop India!&body=Send your query to us.');

}

// require('is-in-viewport')

/**
 * Jquery Scrollify
 */

 require('jquery-scrollify')(window);

//  $('video').each(function(){
//     if ($(this).is(":in-viewport")) {
//         $(this)[0].play();
//     } else {
//         $(this)[0].pause();
//     }
// })

 //var niceScroll = require('jquery.nicescroll');

 //$("html").niceScroll({mousescrollstep:70,cursorcolor:"#0c84e4",autohidemode: "scroll",cursorwidth:"7px",cursorborderradius:"3px",cursorborder:"none",hwacceleration: true,});

/**
 * require wow js
 */

//var WOW = require('wowjs');



// particlesJS.load('part', 'assets/particles.json', function() {
// 	//console.log('callback - particles.js config loaded');
// });


var ar = ["<i class='fa fa-quote-left'></i> Something classy about us ... <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Something classy about us ... <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Something classy about us ... <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Something classy about us ...<i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Something classy about us ... <i class='fa fa-quote-right'></i>",
"<i class='fa fa-quote-left'></i> Something classy about us ... <i class='fa fa-quote-right'></i>"];

// NProgress.start();
// NProgress.set(0.6);


// $(window).on('load', function() {
// 	setTimeout(function() {
// 		NProgress.done();
// 	}, 500);


// })


var timeout = 4000;

function myLoop()
{

	var i=0;
	var loopx = function() {
		$("#texter").addClass('animated fadeInUp').html(ar[i]).delay(2950).queue(function (next) {

			$(this).removeClass('animated fadeInUp').delay(1000);
			$(this).dequeue();
		});

		if(++i >= ar.length)
			i = 0;

	};
	//
	setInterval(loopx, timeout);

}




$(function() {

	myLoop();
	$.scrollify({
		section:".sections",
		interstitialSection:".sectionsFull",
		setHeights: false
	});
	$.scrollify.disable();
});



$("#myonoffswitch3").click(function()
{
	if($('#myonoffswitch3').is(":checked"))
	{
		$.scrollify.enable();
	}
	else
	{
		$.scrollify.disable();
	}

});

$(".know").click(function(e)
{
	console.log(e.target.id);
	$('#myData').modal('show');

});






$(window).on('load', function() {

	setTimeout(function() {

		$(".preloader").delay(500).fadeOut("slow");

		var video2 = $('#my-video-design-1_html5_api')[0];
		var video3 = $('#my-video-design-2_html5_api')[0];

		video2.play();
		video3.play();



	}, 500);

})



$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});




});

/**
 * scroll blur
 */


 // $(window).scroll(function()
 // {

 // 	var top_dist = $(window).scrollTop()/70;

 // 	if(top_dist<=10)
 // 		$('#header-top').css("filter","blur("+top_dist+"px)");


 // });

 function getRandomInt(min, max)
 {
 	return Math.floor(Math.random() * (max - min + 1)) + min;
 }





