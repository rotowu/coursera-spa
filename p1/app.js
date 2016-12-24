(function(){
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', function($scope){
  $scope.message = "";
  $scope.foodList = "";
  $scope.checkIfTooMuch = function() {
    /* Trim white spaces */
    if ($scope.foodList.replace(/\s/g, '') == "") {
      $scope.message = "Please enter data first";
      return
    }
    var res = $scope.foodList.replace(/\s/g, '').split(',');
    var count = 0;

    /* Skip empty elements */
    for (var i=0; i< res.length; i++) {
      if ( res[i]!= "" ) {
        count++;
      }
    }

    if ( count<= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!"
    }
  }
});

})();
