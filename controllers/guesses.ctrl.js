module.controller("guessesCtrl", GuessesCtrl);

function GuessesCtrl($scope, guessesService) {
    $scope.guessesService = guessesService;
}