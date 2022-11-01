var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1') 
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	//play the video
	video.play();
	//update the volume
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

 });

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate)
 });

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate)
 });

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0 
	}
	console.log("Video Current Time is " + video.currentTime)
 });

// DO MUTE AND UNMUTE (you need an if else and there is a javascript function to ask if the video is muted -- if video is muted dislay this)

document.querySelector("#slider").addEventListener("click", function() {
	console.log("The current volume is " + video.volume);
	video.volume = this.value / 100;
	console.log("The current volume is " + video.volume);
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});