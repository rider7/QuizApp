(function() {
    angular.module("csharpFacts")
        .controller("quizCtrl", QuizController)

    QuizController.$inject = ["quizMetrics", "DataService"];

    function QuizController(quizMetrics, DataService) {
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.finalizeAnswers = finalizeAnswers;
        vm.activeQuestion = 0;
        vm.error = false;
        vm.finalize = false;

        var numQuestionsAnswered = 0;

        function setActiveQuestion(index) {
            if (index === undefined) {
                //if index equals undefined there hasnt been a button clicked, loop through to next unanswered question
                var breakOut = false;
                var quizLength = DataService.quizQuestions.length - 1;

                while (!breakOut) {
                    vm.activeQuestion = vm.activeQuestion < quizLength ? ++vm.activeQuestion : 0;
                    //check to see if activeQuestion is less then length of quiz, if so then increment one, if not then reset to 0

                    if (vm.activeQuestion === 0) {
                        vm.error = true;
                    }
                    if (DataService.quizQuestions[vm.activeQuestion].selected === null) {
                        //find the next unanswered question
                        breakOut = true;
                    }
                }
            } else {
                vm.activeQuestion = index;
                //set activeQuestion to passed in function $index by ngclick
            }
        }

        function questionAnswered() {
            var quizLength = DataService.quizQuestions.length;

            numQuestionsAnswered = 0;
            for (var x = 0; x < quizLength; x++) {
                if (DataService.quizQuestions[vm.activeQuestion].selected !== null) {
                    numQuestionsAnswered++;
                    if (numQuestionsAnswered >= quizLength) {
                        //finalize quiz
                        for (var i = 0; i < quizLength; i++) {
                            if (DataService.quizQuestions[i].selected === null) {
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        vm.error = false;
                        vm.finalize = true;
                        return;
                    }
                }
            }
            vm.setActiveQuestion();
            //Not all questions have been answered so we invoke this function
        }

        function selectAnswer(index) {
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        function finalizeAnswers() {
            //reset the controller
            vm.finalize = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
    }

})()
