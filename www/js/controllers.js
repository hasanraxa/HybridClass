angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state, $stateParams, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.var1=12345;

  $scope.cars = ['cultus', 'mehran', 'corolla', 'civic'];
  $scope.gender;
  $scope.style;

  $scope.changeGender = function(gender) {
    $scope.gender = gender;
    console.log($scope.gender);
  }

  $scope.changeClass = function(className) {
    $scope.style = className;
    console.log($scope.style);
  }

  $scope.myKey = $stateParams.name;
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.goToBrowse = function() {
    $state.go('app.browsenew', {name:'ABCD'});
  };

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function(){
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('colorCtrl',function($scope) {

  $scope.name='ABC';
  $scope.fatherName='CDF';
  $scope.school='xyz school';
  $scope.phone=13208432;

  $scope.proj2=function(){
    console.log('123456');
  //  $scope.input=
}

})

.controller('person',function($scope){




//   $scope.person_detail=[
//     {name: 'ABC'},
//     {father name: 'EDF'},
//     {school name: 'ABC School'},
//     {phone: 124324324}
// ];
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
