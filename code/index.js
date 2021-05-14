const sel = document.getElementById('rate');
const audio = document.getElementById('audio');
sel.addEventListener('change', function () {
  audio.playbackRate = this.value;
});

export default {};