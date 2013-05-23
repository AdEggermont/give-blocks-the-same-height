$(window).load(function() {

	function giveBlocksSameHeight(element) {
		var $block = element;
		var blockHeight = 0;

		$block.each(function(){
			if($(this).height() > blockHeight){
				blockHeight = $(this).height();
			}
		});

		$block.height(blockHeight);
	}

	giveBlocksSameHeight($('.block'));

});
