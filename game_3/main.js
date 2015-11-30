$(function(){


	// var playerOne = '<div id="playerOne"></div>';
	// $("#track").append(playerOne);

	// var playerTwo = '<div id="playerTwo"></div>';
	// $("#track").append(playerTwo);

	

	$(document).keydown(function(e) {
	
		// var finishLine = (marginleft + 1000 + 'px')

		var position = $("#playerOne").position();

		var position2 = $('#playerTwo').position();

		switch (e.keyCode)
		{
			case 65:
				$("#playerOne").css('left', position.left + 40 + 'px');
				break;
			case 76:
				$("#playerTwo").css('left', position2.left + 40 + 'px');
				break;
		}	
		// if (playerOne <= 110){
		// 	playerOne ;
		// }
		// // else if (playerTwo <=finishLine){
		// 	// alert("player two");
		// }
	});

});