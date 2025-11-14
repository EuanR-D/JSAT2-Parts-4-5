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

    this.update();
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
    ratingElement.textContent = rating.toFixed(1);

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
    for (let i = 0; i < this.movieArray.length; i++) {
      // Displaying current movie object in the console
      let movie = this.movieArray[i];

      // Running movieRow function with the movie objects properties
      this.movieRow(movie.id, movie.title, movie.year, movie.rating);
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
    
    // looping through each movie object from movie list array
    for (let movie of this.movieArray) {

      // Converting input and title to lowercase for comparison
      if (movie.title.toLowerCase().includes(titleStr.toLowerCase())) {
        // If partial/full input matches title, pushes movie to new array
        searchList.push(movie);
      }
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
    for (let movie of this.movieArray) {
      // If input id matches current movie, pushes movie to new array
      if (movie.id == idNum) {
        searchList.push(movie);
      }
      
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
      // Make current item and object variable
      let movie = searchList[i];
      
      // Run movie row function with objects properties
      this.movieRow(movie.id, movie.title, movie.year, movie.rating);
    }
  }

  // Update list function
  // Removes all elements and displays full movie array list
  update() {
    // remove all elements
    this.removeElements();

    // generate display from movies array
    this.genMovieList();

    this.updateInputId();
  }
  
  // Sort from A-Z function
  // Displays the list by title in alphabetical order
  sortAZ() {
    // using a sort function that compares the title strings, and places them in alphabetical order
    this.movieArray.sort(function(a,b) {
      return a.title.localeCompare(b.title);
    })

    // updating the list to show the new order
    this.update();
  }
  
  // Sort from Z-A function
  // Displays the list by title in reverse alphabetical order
  sortZA() {
    // using a sort function that compares the title strings, and places them in reverse alphabetical order
    this.movieArray.sort(function(a,b) {
      return b.title.localeCompare(a.title);
    })

    // updating the list to show the new order
    this.update();
  }
  
  // Sort rating function
  // Displays the list by rating in descending order
  sortRating() {
    // using a sort function that compares the rating values, and places them in descending order
    this.movieArray.sort(function(a, b) {
      return b.rating - a.rating;
    })

    // updating the list to show the new order
    this.update();
  }

  // Sort ID function
  // Displays the list by ID in ascending order
  sortID() {
    // using a sort function that compares the ID values, and places them in ascending order
    this.movieArray.sort(function(a, b) {
      return a.id - b.id;
    })

    // updating the list to show the new order
    this.update();
  }

  // Add movie function
  // Creates a new object into the movie array with the input values
  addMovie(id, title, year, rating) {
    // pushing a new object with the key/value pairs from the parameters
    this.movieArray.push({
      id: id,
      title: title,
      year: year,
      rating: rating
    });

    // updating the list to show the new movie
    this.update();
  }

  updateInputId() {
    let formId = document.getElementById('addId');

    let nextId = this.movieArray.length + 1;

    formId.value = nextId; 
  }

}