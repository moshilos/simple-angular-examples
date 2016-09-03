/**
 * Created by moshi on 9/3/2016.
 */
angular.module('app', [])
    .controller('mainCtrl', function($scope){
        $scope.header = 'Hello zuba';
        $scope.list = [
            'banana',
            'apple',
            'gezer'
        ]
    })
    .controller('ListCtrl', function($scope){
        $scope.selectedFruit = null;
        $scope.selectFruit = function(fruit){
            $scope.selectedFruit = fruit;
        }
    })
    .controller('NamedCtrl', function(){
        this.title = 'Named Controller';
    });