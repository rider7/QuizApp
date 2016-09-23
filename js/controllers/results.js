(function() {
    angular.module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ['quizMetrics', 'DataService'];

    function ResultsController(quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.getAnswerClass = getAnswerClass;
        vm.setActiveQuestion = setActiveQuestion;
        vm.calculatePer = calculatePer;
        vm.reset = reset;
        vm.activeQuestion = 0;


        function calculatePer() {
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index) {
            vm.activeQuestion = index;
        }

        function getAnswerClass(index) {
            if (index === quizMetrics.correctAnswers[vm.activeQuestion]) {
                return "bg-success";
            } else if (index === DataService.quizQuestions[vm.activeQuestion].selected) {
                return "bg-danger";
            }
        }


        function reset() {
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;

            for(var i = 0; i < DataService.quizQuestions.length; i++){
              //loop through questions in JSON and set to default values
              var data = DataService.quizQuestions[i];

              data.selected = null;
              data.correct = null;
            }
        }
    }

})();
