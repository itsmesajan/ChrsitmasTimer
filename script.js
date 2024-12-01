const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const christmasDay = '25 Dec 2024';

function countdown(){
  const christmasDate = new Date(christmasDay);
  const now = new Date();

  const totalSecond = (christmasDate-now)/1000;
  const days = Math.floor(totalSecond / 60 / 60 / 24);
  const hours = Math.floor((totalSecond/60/60)%60);
  const minutes = Math.floor((totalSecond/60)%60);
  const seconds = Math.floor(totalSecond%60);

  daysEl.innerHTML= timeFormat(days);
  hoursEl.innerHTML= timeFormat(hours);
  minutesEl.innerHTML= timeFormat(minutes);
  secondsEl.innerHTML= timeFormat(seconds);
}

function timeFormat(time){
  return time < 10 ?(`0${time}`) : time;
}

countdown();

setInterval (countdown,1000);