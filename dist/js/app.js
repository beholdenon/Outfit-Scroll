$(function() {
	var w = $(window);
	var firstItem = $("li").eq(0);
	var lastItem = $("li").eq( $("li").length - 1 );
	var offset1 = firstItem.offset().top;
	var offset2 = lastItem.offset().top + lastItem.height();
	w.scroll(function() {
		var wScrollTop = w.scrollTop();
		var pos1 = wScrollTop - offset1;
		var pos2 = wScrollTop - offset2;

	  	if(pos1 < 0) {
	  		firstItem.css("background-position", "center " +  (Math.abs(pos1) - 10) + "px");
	  	}
	  	else {
	  		firstItem.css("background-position", "center 0px");
	  	}
	  	if(pos2 > -700) {
	  		lastItem.css("background-position", "center " +  (-(pos2) - 701) + "px");
	  	}
	  	else {
	  		lastItem.css("background-position", "center 0px");
	  	}
	});

});