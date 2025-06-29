export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    addError(code, descriptionError) {
        this.errors.set(code, descriptionError)
    }

    translate(code) {
        if(!this.errors.has(code)) {
            return 'Unknown error';
        }
        return this.errors.get(code);
    }
}