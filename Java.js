// birinchi sterelgaka ulanamiz

const hour = document.querySelector(".h"),
  min = document.querySelector(".m"),
  sec = document.querySelector(".s"),
  hourNum = document.querySelector(".hours"),
  minNUm = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    second = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  sec.style.transform = `rotate(${second * 6}deg)`;
  min.style.transform = `rotate(${minutes * 6}deg)`;
  hour.style.transform = `rotate(${hours * 30}deg)`;
  setTimeout(() => clock(), 1000);

  hourNum.innerHTML = hours < 10 ? "0" + hours : hours;
  minNUm.innerHTML = minutes < 10 ? "0" + minutes : minutes;
}
clock();

const links = document.querySelectorAll(".tabsItem"),
  tabs = document.querySelectorAll(".tabsContentItem");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", (e) => {
    e.preventDefault();

    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
      tabs[j].classList.remove("active");
    }
    tabs[i].classList.add("active");
    links[i].classList.add("active");
  });
}













const stopwatchHours = document.querySelector('.stopwatch__hours'),
stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
stopwatchBtn = document.querySelector('.stopwatch__btn'),
tabsLinkSpan = document.querySelector('.tabsLink__span');




    stopwatchBtn.addEventListener('click', () => {
    if (stopwatchBtn.innerHTML == 'start') {
      stopwatchBtn.innerHTML = 'stop';
      tabsLinkSpan.classList.add('active')
    } else if (stopwatchBtn.innerHTML == 'stop') {
      stopwatchBtn.innerHTML = 'clear';
      tabsLinkSpan.classList.remove('active');
      tabsLinkSpan.classList.add('active_clear');
    } else if (stopwatchBtn.innerHTML == 'clear') {
      stopwatchBtn.innerHTML = 'start'
        stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML = 0;
        tabsLinkSpan.classList.remove('active_clear')
    }
})

function second() {

    if (stopwatchBtn.innerHTML == 'stop') {
      stopwatchSeconds.innerHTML++;
    }
    if (stopwatchSeconds.innerHTML >= 60) {
      stopwatchSeconds.innerHTML = 0;
        stopwatchMinutes.innerHTML++;

    }
    if (stopwatchSeconds.innerHTML >= 60) {
      stopwatchMinutes.innerHTML = 0;
        stopwatchHours.innerHTML++;

    }
    if (stopwatchBtn.innerHTML == 'start') {
      stopwatchHours.innerHTML = 0;
      stopwatchMinutes.innerHTML = 0;
      stopwatchSeconds.innerHTML = 0;
    }

    setTimeout(() => second(), 1000);


}
second()
