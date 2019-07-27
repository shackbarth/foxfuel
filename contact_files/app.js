$(document).foundation();
$(function(){
	
	//==============={  NAV BEHAVIOR  }===============//
	var didScroll = false;
	var lastScrollTop = 0;
	var delta = 5;
	var navPersists = 750;
	// Stuff for white nav mgmt
	var navScrolled = false;
	var navDistance = 40;	// How far down does the user scroll before '.scrolled' is added?
	
	$(window).scroll(function(){
		var height = $(window).scrollTop();
		didScroll = true;
		hasScrolled(height);
		runNavState(height);
	});
	
	function runNavState(height){
		if(height <= navDistance){
			$(".top-bar").removeClass('scrolled');
			navScrolled = false;
			// console.log("Nav transitioned OUT OF scrolled state");
		}
		if(height >= navDistance && navScrolled == false){
			$(".top-bar").addClass('scrolled');
			navScrolled = true;
			// console.log("Nav transitioned to scrolled state");
		}
	}
	
	function hasScrolled(height){	// Detect scroll direction
		var top = height;
		if (Math.abs(lastScrollTop - top) <= delta) {
			return;
		}
		if (top > lastScrollTop && top > delta && top > navPersists) { // Scrolling Down
			$(".top-bar").addClass('up');
		} else { // Scrolling up
			$(".top-bar").removeClass('up');
		}
		lastScrollTop = top;
	}
	
	// Toggle nav menu
	$('#nav-button').click(function () {
		if (!$(this).hasClass('open')) {
			$('.top-bar-right, #nav-button, #hamburger').removeClass('closed').addClass('open');
		} else {
			$('.top-bar-right, #nav-button, #hamburger').removeClass('open').addClass('closed');
		}
	});
});
	