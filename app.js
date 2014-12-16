var app = angular.module('enrollmentForm', []);
  app.controller('FormController', function ($scope) {

    $scope.submitForm = function() {
        $scope.formData = {
          'firstname': $scope.user.firstname,
          'lastname': $scope.user.lastname,
          'email': $scope.user.email,
          'location': $scope.user.location
        };
      };
  });