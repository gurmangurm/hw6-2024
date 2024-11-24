var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false;
	updateVolumnInfo();
});

/*play pause video*/
document.querySelector("#pause").addEventListener("click", function () {
	console.log("pause");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("play");
	video.play();
	updateVolumnInfo();
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
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
		console.log("Restarting video");}
		else {
		video.currentTime += 10;
	}
	console.log("Current time is ", video.currentTime);
});

function updateVolumnInfo() {
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
}

/*mute video*/
document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted) {
		this.textContent = "Mute";
		video.muted = false;
	} else {
		this.textContent = "Unmute";
		video.muted = true;
	}
	updateVolumnInfo();
});

/*volume slider*/
document.querySelector("#slider").addEventListener("change", function () {
	video.volume = this.value / 100;
	console.log("Volume	is currently ", video.volume);
	updateVolumnInfo();
});

/*styling video*/
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
});

/*removestyling from video*/
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
});