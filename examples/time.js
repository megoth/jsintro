(function ($) {
  var timeoutButton = document.getElementById("StartTimeout");
  timeoutButton.onclick = function () {
    setTimeout(function () {
      console.log("Timeout check-in: ", new Date());
    }, 2000);
    console.log("Timeout started: ", new Date());
  };
  var interval;
  $("#StartInterval").click(function () {
    interval = setInterval(function () {
      console.log("Interval check-in: ", new Date());
    }, 2000);
    console.log("Interval started: ", new Date());
  });
  $("#StopInterval").click(function () {
    clearInterval(interval);
    console.log("Interval stopped: ", new Date());
  });
}(jQuery));