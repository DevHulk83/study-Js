//set date
function setDate(){
  const nowDate = new Date();
  const currentDay = nowDate.getDate();
  const currentMonth = nowDate.getMonth() + 1;
  const currentYear = nowDate.getFullYear();
  document.getElementById('day').innerHTML = currentDay;
  document.getElementById('month').innerHTML = currentMonth;
  document.getElementById('year').innerHTML = currentYear;
}
setDate()

//set time
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');


function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
}

function setRotation(element, rotation) {
  element.style.setProperty('--rotation', rotation * 360);
}

setClock()