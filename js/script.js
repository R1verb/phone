const openPhone = document.querySelector('.not_unlocked-down_open');
const notUnlocked = document.querySelector('.not_unlocked');
const phoneOff = document.querySelector('.phone_off-btn');
const phoneAllOff = document.querySelector('.phone_all');
const unlocked = document.querySelector('.unlocked');
const operator = document.querySelector('.operator');
const headerTime = document.querySelector('.header_time');
const headerOper = document.querySelector('.header-oper');

function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const timeString = hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
  const headerTimeElement = document.querySelector('.header_time');
  if (headerTimeElement) {
    headerTimeElement.textContent = timeString;
  }
  document.getElementById('not_unlocked_time').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

const currentDate = new Date();
const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

const dayOfWeek = daysOfWeek[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const month = months[currentDate.getMonth()];

const dateString = dayOfWeek + ', ' + dayOfMonth + ' ' + month;

document.getElementById("not_unlocked_date").textContent = dateString;

openPhone.addEventListener('click', () => {
  notUnlocked.classList.toggle('not_unlocked-off');
  if (notUnlocked.classList.contains('not_unlocked-off')) {
    unlocked.classList.remove('unlocked-off');
  }
});

phoneOff.addEventListener('click', () => {
  phoneAllOff.classList.toggle('phone_all-off');
  unlocked.classList.add('unlocked-off');
});

phoneOff.addEventListener('click', () => {
  if (notUnlocked.classList.contains('not_unlocked-off')) {
    notUnlocked.classList.remove('not_unlocked-off');
    unlocked.classList.add('unlocked-off');
  }
});

function updateElements() {
  const notUnlocked = document.querySelector('.not_unlocked');
  const unlocked = document.querySelector('.unlocked');
  const notUnlockedTime = document.getElementById('not_unlocked_time');

  if (notUnlocked && !notUnlocked.classList.contains('not_unlocked-off')) {
    operator.classList.remove('operator_not-active');
    headerTime.classList.add('header_time_not-active');
  } else if (unlocked && unlocked.classList.contains('unlocked-off')) {
    operator.classList.add('operator_not-active');
    headerTime.classList.remove('header_time_not-active');
    notUnlockedTime.textContent = updateClock();
  } else {
    operator.classList.add('operator_not-active');
    headerTime.classList.remove('header_time_not-active');
    notUnlockedTime.textContent = updateClock();
  }
}

updateElements();

phoneOff.addEventListener('click', updateElements);
openPhone.addEventListener('click', updateElements);

setInterval(updateClock, 1000);

function jumpAnimation() {
  const openPhone = document.querySelector('.not_unlocked-down_open');
  openPhone.classList.add('jump-animation');
  let startTime = null;
  function animateJump(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    if (progress < 500) {
      openPhone.style.transform = `translateY(-30px)`;
    } else if (progress < 1000) {
      openPhone.style.transform = `translateY(0)`;
    } else {
      startTime = null;
      openPhone.classList.remove('jump-animation');
      return;
    }
    requestAnimationFrame(animateJump);
  }
  requestAnimationFrame(animateJump);
  setTimeout(jumpAnimation, 2000);
}
jumpAnimation();

phoneOff.addEventListener('click', () => {
  setTimeout(() => {
    phoneAllOff.classList.toggle('active');
  }, 5);
});

openPhone.addEventListener('click', () => {
  notUnlocked.classList.remove('not_unlocked-off');
  notUnlocked.classList.add('slide-up');
  notUnlocked.addEventListener('animationend', () => {
    notUnlocked.classList.add('not_unlocked-off');
    notUnlocked.classList.remove('slide-up');
  }, { once: true });
});