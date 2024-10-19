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


### Conclusion

This project reflects my ability to apply JavaScript classes to build a functional library management system. Thank you for exploring my Build a Library project! 