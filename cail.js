class Cail {
    constructor(value, showedValue = "?"){
        this._value = value;
        this._showedValue = showedValue;
        this._open = false;
    };

    get value() {
        return this._value;
    }
    get showedValue() {
        return this._showedValue;
    }

    get open(){
        return this._open;
    }

    set value(value) {
        this._value = value;
    }

    set showedValue(showedValue) {
        this._showedValue = showedValue;
    }

    set open(open) {
        this._open = open;
    }
}