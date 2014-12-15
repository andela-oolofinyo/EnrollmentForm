var app = angular.module('enrollmentForm', []);
  app.controller('FormController', function ($scope) {

    $scope.submitForm = function() {
        $scope.formData = {
          'name': $scope.user.name,
          'email': $scope.user.email,
          'location': $scope.user.location
        };
      };
  });