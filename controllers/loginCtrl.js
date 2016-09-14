angular.module('steam')

  .controller('loginCtrl', ['$rootScope', '$scope', 'handler', '$state', 'localStorageService','steam',
    function ($rootScope, $scope, handler, $state, localStorageService,steam) {
    $scope.logIn = function () {
      $rootScope.loading = true
      handler.login($scope.signInUsername, $scope.signInPasswd).then(function (response) {
        $state.go('workarea.list')
      })
    }

$scope.user = {};

	$scope.makeLogin = function () {
            console.log($scope.user);
            steam.login($scope.user.username, $scope.user.password).then(function (data) {
                console.log("Response : ", data);
                var checkLoggedStatus = steam.loginp();
                console.log("New logged : ", checkLoggedStatus);
                $state.go('workarea.list');
            });
        };

  }])
