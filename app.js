var app = angular.module('CalculatorApp', []);

app.controller('CalculatorController', ['$scope', function($scope) {

    var myCalc = '0';
    $scope.result = '0';

    $scope.clearExp = function() {
        $scope.result = '0';
        myCalc = '0';
    }

    $scope.clearEntry = function() {
        $scope.result = '0';
    }

    $scope.toggleSign = function() {
        $scope.result = $scope.result * -1
    }

    $scope.appendExp = function(exp) {

        var num = /[0-9]|\./
        if (num.test(exp) && num.test($scope.result) && $scope.result != '0') {
            $scope.result += exp;
        } else {
            myCalc += $scope.result;
            $scope.result = exp;
        }
        console.log(myCalc);
    }

    $scope.evalExp = function() {
        var r = /0+(?=\d)/g
        myCalc += $scope.result;
        myCalc = myCalc.replace(r, '');
        r = /\D+(?=\D)/g
        myCalc = myCalc.replace(r, '');
        r = /\D+$/g
        myCalc = myCalc.replace(r, '');
        if (myCalc !== '') {
            $scope.result = eval(myCalc);
            myCalc = '0';
        } else {
            $scope.result = '0';
        }
    }

}]);