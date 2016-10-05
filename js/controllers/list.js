(function() {
    angular.module("csharpFacts")
        .controller("listCtrl", ListController);
    // .controller("listCtrl", function(){}) also useable

    // function ListController($scope){
    //   //$scope is an angular service that is injected into controller so you can bind data
    //   $scope.test = "This App Works"
    // }

    ListController.$inject = ["quizMetrics", "DataService"];
    //$inject allows us to inject the service named "quizMetrics" into the function

    function ListController(quizMetrics, DataService) {
        //using the keyword 'this' to bind data to ListController
        var vm = this;
        //setting the keyword 'this' to variable vm for viewmodel
        //vm.test = "This App Works";
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.csharp_Data;
        vm.activecsharp = {};
        vm.changeActivecsharp = changeActivecsharp;
        vm.search = '';
        vm.activateQuiz = activateQuiz;

        function changeActivecsharp(index) {
            vm.activecsharp = index;
            // index will be the csharp clicked on and set to activecsharp object
        }

        function activateQuiz() {
            quizMetrics.changeState("quiz", true);
        }
    }
})();
