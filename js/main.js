var navIcon = document.getElementById('nav-icon');
var date = new Date();
var currentYear = document.getElementById('current-year');
currentYear.innerText = date.getFullYear();

function showNav(){
	
	var topNav = document.getElementById('main-nav');	

	if (topNav.className === "top-nav"){
		 topNav.className += " responsive";
	} else {
		 topNav.className = "top-nav";
	}
}

$(document).ready(function(){

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200){
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	$('#back-to-top').click(function(){

		$('body, html').animate({
			scrollTop:0}, 1000);
	});

	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view(){
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function() {
      	var $element = $(this);
      	var element_height = $element.outerHeight();
      	var element_top_position = $element.offset().top;
      	var element_bottom_position = (element_top_position + element_height);

      	if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      	$element.addClass('in-view');
    	} //else {
      	//$element.removeClass('in-view');
      //} Remove comments to make animation repeat itself.
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
	

}); //end of jQuery

navIcon.addEventListener('click', showNav, false);
