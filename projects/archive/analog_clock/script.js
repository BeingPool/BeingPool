const hh = document.getElementById('hourHand');
const mh = document.getElementById('minuteHand');
const sh = document.getElementById('secondHand');
const setClock = function() {
  let date = new Date();
  let hours = (date.getHours() * 30) + (date.getMinutes() / 2) + (date.getSeconds() / 120);
  let minutes = (date.getMinutes() * 6) + (date.getSeconds() / 10);
  let seconds = date.getSeconds() * 6;
  hh.style.transform = `rotate(${hours}deg)`;
  mh.style.transform = `rotate(${minutes}deg)`;
  sh.style.transform = `rotate(${seconds}deg)`;
}
setClock();
setInterval(setClock, 1000);
