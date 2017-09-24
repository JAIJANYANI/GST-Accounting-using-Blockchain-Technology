var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    console.log("app config");
    
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/formvalidation', {
        templateUrl: 'partials/formvalidation.html',
        controller: 'RegistrationController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);




myApp.factory('aProvider', function() {
   console.log("factory");
});

myApp.directive("testdirective", function() {
    console.log("directive setup");
    return {
        compile: function() {console.log("testdirective compile");}
    }
});

myApp.directive("testdirective2", function() {
    return {
        link: function() {console.log("testdirective2 link");}
    }
});

myApp.run(function() {
    console.log("app run");
});

myApp.controller('myCtrl', function($scope) {
    console.log("app controller");
});

