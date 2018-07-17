$(function() {
	function loadJSON(file){ 
		var jqxhr = $.getJSON( file, function(data) {
		  console.log(data);
		  parseData(data);
		})
		 .fail(function() {
		   console.log( "error" );
		   alert("fail");
		 })
	}

	function parseData(data) {
		console.log(data);
		$.each( data, function( key, val ) {
			console.log(key + " " + val.product_name)
		});
	}
	loadJSON("./data/test.json");

});