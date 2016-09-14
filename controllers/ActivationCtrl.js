angular.module('steam')
    .controller('ActivationCtrl', [
        '$scope', '$stateParams', 'steam', function ($scope, $stateParams, steam) {
            var activationdata, handle_activation;
            handle_activation = function (data) {
                if (data.result === "user is activated") {
                    $scope.activation = "activated";
                } else if (data.error === "user already activated") {
                    $scope.activation = "active";
                } else {
                    $scope.activation = "failed";
                }
                $scope.userid = $stateParams.userid;
                $scope.error = data.error;
                return $scope.data = data;
            };
            activationdata = {
                activate: $stateParams.activationcode,
                userid: $stateParams.userid
            };
            return steam.post('activate', activationdata).then(handle_activation);
        }
    ]);
