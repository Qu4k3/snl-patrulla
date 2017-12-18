var schedule = [
    ['Dec 19 2016', 'Dec 26 2016'],
    ['Jan 1 2017', 'Jan 7 2017'],
	 ['Feb 7 2017', 'Feb 10 2017'],
    ['Jun 25 2017', 'Jul 25 2017'],
    ['Jul 27 2017', 'Dec 25 2017'],
    ['Dec 26 2017', 'Dec 24 2018'],
    ['Dec 25 2016', 'Jul 25 2021']
];

var deadline = 'December 23 2017 21:00:00 GMT+0100';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}



function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  clock.style.display = 'block';
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

for(var i=0; i<schedule.length; i++){
  var startDate = schedule[i][0];
  var endDate = schedule[i][1];

  var startMs = Date.parse(startDate);
  var endMs = Date.parse(endDate);
  var currentMs = Date.parse(new Date());

  if(endMs > currentMs && currentMs >= startMs ){
      initializeClock('clockdiv', deadline);
  }
}