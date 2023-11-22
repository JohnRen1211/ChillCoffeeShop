/*Script js coffee shop*/
function changeMusic(musicFile) {
  var audioPlayer = document.getElementById("music-player"); /*Changing the music*/
  audioPlayer.src = musicFile;
}

function playMusic() {
  var audioPlayer = document.getElementById("music-player"); /*Play music*/
  audioPlayer.play();
}