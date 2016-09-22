angular
  .module('dashApp',['ngMaterial'])
  .controller('dashCtrl',dashApp);

  function dashApp($scope,$mdSidenav){
   
    $scope.toggleLeft = buildToggler('left');
    //$scope.toggleRight = buildToggler('right');
    $scope.is_open = true;
      
      
      angular.element(document).ready(function () {
       //alert('hello');
           $mdSidenav('left').open();
    });
      
      
      
    function buildToggler(componentId) {
      return function() {
        $mdSidenav('left').open();
         
          
          $scope.is_open = $scope.is_open === false ? true: false;
          
          var side = angular.element( document.querySelector( '#sideNav' ) );
           var content = angular.element( document.querySelector( '#content' ) );
           
          if ($scope.is_open === false) {
                side.addClass('textNav');
                side.removeClass('iconNav');
              
                content.addClass('textContent');
                content.removeClass('iconContent');
            } else {
                 side.addClass('iconNav');
                 side.removeClass('textNav') 
               
                 content.addClass('iconContent');
                content.removeClass('textContent');
            } 
          
          
          
          
      }
    }
      
      
    
      
      
      
      
  }
