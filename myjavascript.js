var modal = document.getElementById("myModal1");

var btn = document.getElementById("movie1");
var btn2 = document.getElementById("movie2");
var btn3 = document.getElementById("movie3");
var btn4 = document.getElementById("movie4");
var btn5 = document.getElementById("movie5");
var btn6 = document.getElementById("movie6");

var span = document.getElementsByClassName("close")[0];

var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  

var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '70%',
      width: '50%',

	  });
  }
  
  
  

btn.onclick = function() {
modal.style.display="block";
player.loadVideoById('qSqVVswa420');
}
btn2.onclick = function() {
	modal.style.display="block";
	player.loadVideoById('e2sgmES50s0');
}
btn3.onclick = function() {
	modal.style.display="block";
	player.loadVideoById('sfM7_JLk-84');
}
btn4.onclick = function() {
	modal.style.display="block";
	player.loadVideoById('KK8FHdFluOQ');
}
btn5.onclick = function() {
	modal.style.display="block";
	player.loadVideoById('ybji16u608U');
}
btn6.onclick = function() {
	modal.style.display="block";
	player.loadVideoById('BIhNsAtPbPI');
}




span.onclick = function() {
modal.style.display="none";
player.stopVideo();
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display="none";
player.stopVideo();
}
}