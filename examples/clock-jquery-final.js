$(function () {
	var clock = $('#clock');

	var updateTime = function () {
		clock.text(moment().format('h:mm:ss'));
	};
	
	updateTime();
	setInterval(updateTime, 1000);
});