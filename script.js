var drumModule = {
  init: function () {
      window.addEventListener('keydown', this.playSound.bind(this));
      const keys = Array.from(document.querySelectorAll('.key'));
      keys.forEach(key => key.addEventListener('transitionend', this.removeCss.bind(this)));
  },
  playSound: function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    

    key.classList.add('playing');
  }, 
  removeCss: function (e) {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

}

drumModule.init();