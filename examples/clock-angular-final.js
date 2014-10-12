var clockApp = angular.module('clockApp', []);

clockApp.service('moment', function () {
	return moment;
});

clockApp.controller('clockController', [
	'$scope',
	'moment',
	function ($scope, moment) {
		var updateTime = function () {
			$scope.clock = moment().format('h:mm:ss');
		};

		updateTime();
		setInterval(function () {
			$scope.$apply(updateTime);
		}, 1000);
	}
]);