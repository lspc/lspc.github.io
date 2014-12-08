var sidebarOn = false;

$(document).ready(function(){
	setTimeout(function(){
		$("#loading").fadeOut('slow');
	}, 1500);
	$("#navtoggle").click(function(){
		if(sidebarOn) {
			$("#sidebar").css('margin-left', '-15vw');
			$("main").css('margin-left', '0');
			$("#navtoggle").removeClass('glyphicon-remove');
			$("#navtoggle").addClass('glyphicon-th-list');
			sidebarOn = false;
		} else {
			$("#sidebar").css('margin-left', '0');
			$("main").css('margin-left', '15vw');
			$("#navtoggle").removeClass('glyphicon-th-list');
			$("#navtoggle").addClass('glyphicon-remove');
			$("#navtoggle").css('color', '#1645B2');
			sidebarOn = true;
		}
	});
	$("spacer").height($("#navbar").height());
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				}
			}
		});
	});
});