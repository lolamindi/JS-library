# Build a Library

## Overview

This Codecademy project requires you to imagine yourself as the newly appointed head librarian at Books-‘N-Stuff. The aim of the project is to modernise the library's media management system, which previously relied on index cards. This project demonstrates my ability to create a structured library system using classes. 

## Project Structure
The project required me to implement a parent class named Media, along with three subclasses: Book, Movie, and CD. Each class handles different types of media, incorporating shared functionalities and specific properties.

## Class Descriptions

### Media (Parent Class)

    Properties:
        isCheckedOut (boolean, initially false)
        ratings (array, initially empty)

    Methods:
        .getAverageRating(): Calculates and returns the average rating.
        .toggleCheckOutStatus(): Toggles the checkout status of the media.
        .addRating(rating): Adds a rating to the ratings array.

### Book (Subclass of Media)

    Properties:
        author (string)
        title (string)
        pages (number)

    Getters:
        All properties have a getter method for easy access.

### Movie (Subclass of Media)

    Properties:
        director (string)
        title (string)
        runTime (number)

    Getters:
        All properties have a getter method for easy access.

### CD (Subclass of Media)

    Properties:
        artist (string)
        title (string)
        songs (array of strings)

    Getters:
        All properties have a getter method for easy access.

## Usage

To use this library management system, you can create instances of the Book, Movie, and CD classes. Each instance allows you to manage media items efficiently, keeping track of their checkout status and ratings.

### Example

```
const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
myBook.addRating(5);
myBook.addRating(3);
console.log(myBook.getAverageRating()); // Outputs: 4
myBook.toggleCheckOutStatus();
console.log(myBook.isCheckedOut); // Outputs: true

const myMovie = new Movie("Inception", "Christopher Nolan", 148);
myMovie.addRating(5);
console.log(myMovie.getAverageRating()); // Outputs: 5
myMovie.toggleCheckOutStatus();
console.log(myMovie.isCheckedOut); // Outputs: true

const myCD = new CD("Abbey Road", "The Beatles", ["Come Together", "Something"]);
myCD.addRating(5);
console.log(myCD.getAverageRating()); // Outputs: 5
```