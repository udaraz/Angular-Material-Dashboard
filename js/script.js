angular
  .module('dashApp',['ngMaterial'])
  .controller('dashCtrl',dashApp);

  function dashApp($scope,$mdSidenav){
   
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    
    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }
  }
