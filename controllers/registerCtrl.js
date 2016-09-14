angular.module('steam')

  .controller('registerCtrl', ['$rootScope', '$scope', 'handler', '$state', 'localStorageService','steam',
    function ($rootScope, $scope, handler, $state, localStorageService, steam) {
	$scope.registerdata = {};
	$scope.registerMember = function () {
	    $scope.registerdata.group = 'steam';
	    $scope.registerdata.userid = $scope.registerdata.fullname.toLowerCase().replace(/[^a-z ]/g, "").trim().replace(/\s+/g, ".");
	    return steam.post('register', $scope.registerdata).then(handle_request);
	};
	handle_request = function (data) {
	    return $scope.data = data;
	};

  }])
