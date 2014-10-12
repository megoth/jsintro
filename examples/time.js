window.onload = function () {
  document.getElementById("StartTimeout").addEventListener("click", function () {
    console.log("Timeout started");
    setTimeout(function () {
      console.log("Timeout completed");
    }, 2000);
  });

  // variable interval is an example of closure
  var interval;
  document.getElementById("StartInterval").addEventListener("click", function () {
    console.log("Interval started");
    interval = setInterval(function () {
      console.log("Interval check-in");
    }, 2000);
  });

  document.getElementById("StopInterval").addEventListener("click", function () {
    clearInterval(interval);
    console.log("Interval stopped");
  }); 
};