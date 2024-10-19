class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    toggleCheckedOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        if (this.ratings.length === 0) return 0;
        let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingSum / this.ratings.length;
    }

    addRating(value) {
        if (value >= 1 && value <= 5) {
            this.ratings.push(value);
        } else {
            console.log("Rating must be between 1 and 5.");
        }
    }

    displayInfo() {
        return `Title: ${this.title}, Checked Out: ${this.isCheckedOut}, Average Rating: ${this.getAverageRating()}`;
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book("Bill Bryson", "A Short History of Almost Everything", 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(1);
historyOfEverything.addRating(4);
historyOfEverything.addRating(1);
console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything.displayInfo());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(3);
speed.addRating(4);
speed.addRating(2);
console.log(speed.getAverageRating());
console.log(speed.displayInfo());
