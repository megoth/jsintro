var startTime = function () {
    clock = document.getElementById('clock');
    updateTime(clock);
};

var updateTime = function (clock) {
  clock.innerHTML = moment().format("h:mm:ss");
  setTimeout(function () {
  	updateTime(clock);
  }, 1000);
};