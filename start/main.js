$(document).ready(function(){
	// Hover over card
	$('#card-row img').hover(function() {
		$(this).css('opacity', '0.6');
	}, function() {
		$(this).css('opacity', '1');
	});
});
