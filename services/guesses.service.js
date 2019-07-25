module.service("guessesService", GuessesService);

function GuessesService() {
    this.guess = 0;
    this.correct = 0;
    this.addGuess = () => {
        this.guess++;
    };
    this.addCorrect = () => {
        this.correct++;
    };
    this.resetGuesses = () => {
        this.guess = 0;
        this.correct = 0;
    }
};