const playSong = document.getElementById('play-song');
const pauseSong = document.getElementById('pause-song');

const song = {
  file: 'plot-song.mpeg',
  isPLaying: false
};


function playSong() {
  playSong.querySelector('.bi').classList.remove('bi-play');
  playSong.querySelector('.bi').classList.add('bi-pause');
  song.playSong();
}

playSong.addEventListener('click', playSong);