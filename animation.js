//  Runs the animation for the ASCII page
//  changes the text size, picks specific animation

var timer = null;  //represents the interval timing between scene changes
var frames = null;  //represents the full animation in screen before it's run
var frameNum = 0;  //represents the frame number

//This code runs when the page loads first time
window.onload = function() {
	$("startButton").onclick = startClick;
	$("stopButton").onclick = stopClick;
	$("animation").onchange = animationSelect;
	$("small").onclick = size;
	$("medium").onclick = size;
	$("large").onclick = size;
}

//This function is called when an animation is selected
//puts the animation in the screen
function animationSelect() {
	var anim = $("animation").value;
	$("myTextArea").value = ANIMATIONS[anim];
	frames = $("myTextArea").value;
}

//This function is called when the start button is clicked
//if animation isn't going yet, it starts it
function startClick() {
	if (!timer) {
		frames = $("myTextArea").value;
		timer = setInterval(runAnimation, 200);	
	}
}

//This function is called when start button is clicked and
//animation isn't going yet.  Displays each frame on the screen
function runAnimation() {
	var temp = frames.split("=====\n");
	if (frameNum < temp.length) {
		$("myTextArea").value = temp[frameNum];
		frameNum++;
	} else {	
		$("myTextArea").value = temp[0];
		frameNum = 0;
	}
}

//This function is called when stop button is clicked
//Stops the animation (if running), returns all frames of animation
//to the screen 
function stopClick() {
	clearInterval(timer);
	timer = null;
	frameNum = 0;
	$("myTextArea").value = frames;
}

//This function is called when a size radio button is clicked
//changes the size of the main text area
function size() {
	if ($("small").checked) {
		$("myTextArea").style.fontSize = "7pt";
	} else if ($("medium").checked) {
		$("myTextArea").style.fontSize = "12pt";
	} else {
		$("myTextArea").style.fontSize = "24pt";
	}
}

	