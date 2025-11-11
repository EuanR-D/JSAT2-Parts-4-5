// File: movie-list.js
// Desc: movie list class and methods for JSAT2 Part 5
// Author: Euan Renfrey-Douglas
// Date created: 2025-11-11
// Last modified: 2025-11-11

// Methods
//


// Movie list class
class MovieList {

  // Constructor
  constructor(rootId, movieArray) {
    // ID of the tbody that displays the movie list
    this.rootId = rootId;
    // Array of movie objects
    this.movieArray = movieArray;

    this.refresh();
  }

  // Create movie row function
  // Generate 1 row from the movie array
  movieRow(id, title, year, rating) {
    // Getting parent element from dom
    const rootElement = document.getElementById(this.rootId);

    // Create dom elements
    const row = document.createElement('tr');
    const idElement = document.createElement('td');
    const titleElement = document.createElement('td');
    const yearElement = document.createElement('td');
    const ratingElement = document.createElement('td');

    // Add content to elements
    idElement.textContent = `${id}.`;
    titleElement.textContent = title;
    yearElement.textContent = year;
    ratingElement.textContent = rating;

    // Adding movie-row class to tr so its in tbody
    row.classList.add('movie-row');

    // Append elements to row
    row.appendChild(idElement);
    row.appendChild(titleElement);
    row.appendChild(yearElement);
    row.appendChild(ratingElement);

    // Append row to dom
    rootElement.appendChild(row);
  }

  // Generate movie list function
  // Generates a row for each item in the movie array
  genMovieList() {

    // Loop through the array
    for (let i = 0; i < this.movieList.length; i++) {
      // Displaying current movie object in the console
      let movie = this.movieList[i];
      console.log(movie);

      // Running movieRow function with the movie objects properties
      this.movieRow(movie.id, movie.title, movie.year, movie,rating);
    }
  }

  // Remove elements function
  // Removes all current elements from list display
  removeElements() {
    // Getting list element from dom
    const rootElement = document.getElementById(this.rootId);

    // Getting the child of root element
    const childNodes = document.getElementsByClassName('movie-row');

    // Const for the length of the array, but 0 indexed
    const len = childNodes.length - 1;

    // Looping through each item in the row and removing it
    for (let i = len; i >= 0; i--) {
      const child = childNodes[i];
      rootElement.removeChild(child);
    }
  }

  // Search by title function
  // Compares input string to movie title and returns matching list
  searchTitle(titleStr) {
    // Creating empty array to push results to if found
    let searchList = [];

    // Converting input and title to lowercase for comparison
    let movieTitle = movie.title.toLowerCase();
    let searchedTitle = titleStr.toLowerCase();

    // looping through each movie object from movie list array
    for (let movie of this.movieList) {
      // If partial/full input matches title, pushes movie to new array
      if (movieTitle.includes(searchedTitle)) {
        searchList.push(movie);
      }
      console.log(searchList);
    }

    // Passes final search array to function to display it
    this.genMovieSearchList(searchList);
  }

  // Search by ID function
  // compares input number to movie id and returns match
  searchId(idNum) {
    // Creating empty array to push results to if found
    let searchList = [];

    // looping through each movie object from movie list array
    for (let movie of this.movieList) {
      // If input id matches current movie, pushes movie to new array
      if (movie.id == idNum) {
        searchList.push(movie);
      }
      console.log(searchList);
    }

    // Passes final search array to function to display it
    this.genMovieSearchList(searchList);
  }

  // Generate searched movie list
  // Generates list based on found search results
  genMovieSearchList(searchList) {
    // Removes all current movies from display
    this.removeElements();

    // Loops through each movie in the list
    for (let i = 0; i < searchList.length; i++) {
      // Display current movie object in console
      let movie = searchList[i];
      console.log(movie);
      
      // Run movie row function with objects properties
      this.movieRow(movie.id, movie.title, movie.year, movie.rating);
    }
  }

}