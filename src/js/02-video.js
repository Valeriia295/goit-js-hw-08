import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = time => {
  const seconds = time.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);
