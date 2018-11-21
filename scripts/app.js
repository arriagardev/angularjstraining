var app = angular.module("myApp", ["ngRoute"]);

/* Routing */
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/pages/pre.html",
    controller : "preCtrl"
  })
  .when("/day1", {
    templateUrl : "/pages/day1.html",
    controller : "day1Ctrl"
  })
  .when("/day2", {
    templateUrl : "/pages/day2.html",
    controller : "day2Ctrl"
  })
  .when("/day3", {
    templateUrl : "/pages/day3.html",
    controller : "day3Ctrl"
  })
  .when("/day4", {
    templateUrl : "/pages/day4.html",
    controller : "day4Ctrl"
  })
  .otherwise({
    template : "<h1>404 Not Found</h1>"
  });
});

/* Nav menu */
window.addEventListener('load', function() {
  var loadedPage = window.location.hash.slice(3);
  document.querySelector('[href="#!' + loadedPage + '"]').classList.add('active');
});

document.querySelector('.navbar-nav').addEventListener('click', function( event ) {
  var activeNav = document.querySelector('.navbar-nav .active');
  if ( activeNav )
    activeNav.classList.remove('active');
  
  event.target.classList.add('active');
});