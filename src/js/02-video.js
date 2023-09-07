import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player', {
    id: 236203659,
    width: 640,
});

vimeoPlayer.on('timeupdate', throttle((event) => {
  const playerTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', playerTime);
}, 1000)); 

  document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime !== null) {
      vimeoPlayer.setCurrentTime(savedTime);
    }
  });
