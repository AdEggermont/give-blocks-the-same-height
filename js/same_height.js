$(document).ready(function() {

	var $block = $('.block'),
		blockHeight = 0;

	$block.each(function(){
		if($(this).height() > blockHeight){
			blockHeight = $(this).height();
		}
	});

	$block.height(blockHeight);

});
