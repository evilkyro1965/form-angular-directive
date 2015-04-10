var mainApp = angular.module("mainApp",[]);

mainApp.controller("mainController", function($scope){



});

mainApp.directive('inputtext', function () {
    return {
        scope : {
            label : "@label"
        },   
        templateUrl : "template/input-text.html", 
        link: function (scope, element, attrs, ctrl, $transcludeFn) {
            
        }
    };
});

