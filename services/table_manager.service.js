module.service("tableManagerService", TableManagerService);

function TableManagerService($timeout, guessesService) {

    this.table = [];
    this.cailesCount = 16;

    this.resetOpenedIndex = () => {
        this.openedIndex = [-1, -1];
    }

    this.resetTable = () => {
        this.table = [];
        for (let i = 0; i < this.cailesCount; i += 2) {
            const value = Math.floor(Math.random() * 100);
            this.table.push(new Cail(value));
            this.table.push(new Cail(value));
        }
    }

    this.shuffleTable = () => {
        for (let i = this.table.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.table[i], this.table[j]] = [this.table[j], this.table[i]];
        }
    }

    this.init = () => {
        this.resetTable();
        this.resetOpenedIndex();
        this.shuffleTable();
        guessesService.resetGuesses();
    }

    this.onClick = (index) => {
        const opendCailes = this.openedIndex.filter(cailIndex => cailIndex === -1).length;
        this.table[index].showedValue = this.table[index].value;
        switch (opendCailes) {
            case 2:
                this.openedIndex[0] = index;
                break;
            case 1:
                if (this.openedIndex[0] !== index) {
                    guessesService.addGuess();
                    this.openedIndex[1] = index;
                    this.checkWin();
                }
                break;
        }
    }

    this.checkWin = () => {
        if (this.table[this.openedIndex[0]].value !== this.table[this.openedIndex[1]].value) {
            this.openedIndex.forEach(cailIndex => {
                $timeout(() => { this.table[cailIndex].showedValue = '?'; }, 1500);
            });
        }
        else {
            this.openedIndex.forEach(cailIndex => {
                this.table[cailIndex].open = true;
            });
            guessesService.addCorrect();
        }
        this.resetOpenedIndex();
    };
}