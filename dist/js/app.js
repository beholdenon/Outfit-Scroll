$(function() {
	var w = $(window);
	// get reference to first and last item outfit li
	var firstItem = $("li").eq(0);
	var lastItem = $("li").eq( $("li").length - 1 );

	// capture the top offset top of first element and bottom of last element
	var offset1 = firstItem.offset().top;
	var offset2 = lastItem.offset().top + lastItem.height();

	// on scroll 
	w.scroll(function() {
		// get window scrollTop
		var wScrollTop = w.scrollTop();
		
		// get the position of the elements relative to the windows scrollTop
		var pos1 = wScrollTop - offset1;
		var pos2 = wScrollTop - offset2;

		// set y position of background on first element 
	  	if(pos1 < 0) {
	  		firstItem.css("background-position", "center " +  -pos1 + "px");
	  	}
	  	else {
	  		firstItem.css("background-position", "center 0px");
	  	}

	  	// set y position of background on last element element 
	  	if(pos2 > -700) {
	  		lastItem.css("background-position", "center " +  (-pos2 - lastItem.height()) + "px");
	  	}
	  	else {
	  		lastItem.css("background-position", "center 0px");
	  	}
	});

});