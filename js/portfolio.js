angular.module('app.controllers', []).controller('portfolio', ['$http', '$scope', '$state', '$interval', function($http, $scope, $state, $interval) {
    angular.extend($scope, {
        skills: ['Image', 'Gradient', 'Colors', 'Text'],
        currentMsg: '',
    });
    var index = 0;

    $interval(function() {
        $scope.currentMsg = $scope.skills[index]
        index++;
        if (index == $scope.skills.length) {
            index = 0
        }
        // $('.slide').fadeIn(1200)
        // $('.slide').fadeOut(900)
    }, 3000);
}])