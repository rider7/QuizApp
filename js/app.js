//file defines our app
(function() {
    //immediately invoking function expression, runs automatically
    angular.module("csharpFacts", ['ui.router']) // injects ui-router
    //create angular module, name same as ng-app on index, array will contain dependecies of module

    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'routes/quizMain.html'
        })

        .state('admin', {
          url: '/admin',
          templateUrl: 'routes/quizAdmin.html'
        })

    });

})()
