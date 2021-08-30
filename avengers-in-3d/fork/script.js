$(document).ready(function(){
		$(".wrap").css("width", $(window).width());
	})
	$(document).on("mousemove", function(event){
		var window_height = $(this).height();
		var window_width = $(this).width();
		var mouseXpos = event.clientX;
		var mouseYpos = event.clientY;
		var YrotateDeg = (window_width/2 - mouseXpos) * -0.02;
		var XrotateDeg = (window_height/2 - mouseYpos) * -0.02;
		$(".wrap").css("transform", "rotateX("+XrotateDeg+"deg) rotateY("+YrotateDeg+"deg)");
	});