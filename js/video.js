var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

/*play pause vide*/
document.querySelector("#pause").addEventListener("click", function () {
	console.log("pause");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

/*slow down video*/
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9;
	console.log("Speed is currently ", video.playbackRate);
});

/*speed up video*/
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9;
	console.log("Speed is currently ", video.playbackRate);
});

/*skip video*/
ocument.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Restarting video");}
		else {
		video.currentTime += 10;
	}
	console.log("Current time is ", video.currentTime);
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

