let mouseDown = false;
document.addEventListener('mousedown', function() {
  mouseDown = true;
})
document.addEventListener('mouseup', function() {
  mouseDown = false;
})
const volumeControl = document.getElementById('volume_control');
const volumeMeter = document.getElementById('volume_meter');
const volumeSlider = document.getElementById('volume_slider');
const volumeChange = function(event) {
  if (mouseDown === true) {
    let elementBottom = volumeMeter.getBoundingClientRect().bottom;
    let elementHeight = volumeMeter.getBoundingClientRect().height;
    let Y = event.clientY;
    let value = ((elementBottom - Y) / (elementHeight / 100));
    if (value >= 100) {
      value = 100;
    } else if (value <= 0) {
      value = 0;
    } else {
      value = Math.floor(value);
    }
    let valueString = value.toString();
    volumeMeter.value = valueString;
    volumeSlider.style.bottom = ((165) * volumeMeter.value / 100) + 'px';
  }
}
volumeControl.addEventListener('mousemove', function() {volumeChange(event)})
