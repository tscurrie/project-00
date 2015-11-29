$(function() {

$("#playerOne").click(function() {
	$(this).css('marginLeft','+=100px');
});



$(function() {
	$('#playerTwo').click(function() {
		$(this).css('marginLeft','+=100px');
	});
});

window.addEventListener("keydown", checkKeyPressed, false);
 
function checkKeyPressed(e) {
    if (e.keyCode == "65") {
        alert("The 'a' key is pressed.");
    }
}
window.addEventListener("keydown", checkKey, false);

function checkKey(e) {
    if (e.keyCode == "222") {
        alert("The 'quote' key is pressed.");
    }
}
// var mLeft = document.getElementById("#playerOne").style.marginLeft = size + "px";

// function movePlayer (press)
	// function press is heard you are going to increase #playerOne marginLeft by 80 px.

});