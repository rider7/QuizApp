(function() {
    angular.module("turtleFacts")
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
        vm.data = DataService.turtlesData;
        vm.activeTurtle = {};
        vm.changeActiveTurtle = changeActiveTurtle;
        vm.search = '';
        vm.activateQuiz = activateQuiz;

        function changeActiveTurtle(index) {
            vm.activeTurtle = index;
            // index will be the turtle clicked on and set to activeTurtle object
        }

        function activateQuiz() {
            quizMetrics.changeState(true);
        }
    }
})();
