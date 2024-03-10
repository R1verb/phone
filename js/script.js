// TIME

function updateClock() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
  document.getElementById('not_unlocked_time').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// NOT UNLOCKED TIME

// NOT UNLOCKED DITE

var currentDate = new Date();
var daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

var dayOfWeek = daysOfWeek[currentDate.getDay()];
var dayOfMonth = currentDate.getDate();
var month = months[currentDate.getMonth()];

var dateString = dayOfWeek + ', ' + dayOfMonth + ' ' + month;

document.getElementById("not_unlocked_date").textContent = dateString;

// NOT UNLOCKED DITE

const openPhone = document.querySelector('.not_unlocked-down_open');
const notUnlocked = document.querySelector('.not_unlocked');

openPhone.addEventListener('click', () => {
  notUnlocked.classList.toggle('not_unlocked-off');
});

const phoneOff = document.querySelector('.phone_off-btn');
const phoneAllOff = document.querySelector('.phone_all');

phoneOff.addEventListener('click', () => {
  phoneAllOff.classList.toggle('phone_all-off');
});

phoneOff.addEventListener('click', () => {
  if (notUnlocked.classList.contains('not_unlocked-off')) {
    notUnlocked.classList.remove('not_unlocked-off');
  }
});