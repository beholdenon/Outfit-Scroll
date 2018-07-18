$(function() {
	var topOffset1 = $("li").eq(0).offset().top;
	var topOffset2 = $("li").eq(4).offset().top + $("li").eq(4).height();
	$( window ).scroll(function() {
		var pos1 = $(window).scrollTop() - topOffset1;
		var pos2 = $(window).scrollTop() - topOffset2;
	  	if(pos1 < 0) {
	  		$("li").eq(0).css("background-position", "center " +  (Math.abs(pos1) - 10) + "px");
	  	}
	  	else {
	  		$("li").eq(0).css("background-position", "center 0px");
	  	}
	  	if(pos2 > -700) {
	  		$("li").eq(4).css("background-position", "center " +  (-(pos2) - 701) + "px");
	  	}
	  	else {
	  		$("li").eq(4).css("background-position", "center 0px");
	  	}
	});

});