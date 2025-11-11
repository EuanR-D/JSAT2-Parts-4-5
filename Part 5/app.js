// File: app.js
// Desc: contains default array and lets methods interact with DOM. For JSAT2 Part 5
// Author: Euan Renfrey-Douglas
// Date created: 2025-11-11
// Last modified: 2025-11-11



// Default initial movie list
let initialMovies = [
  {id: 1, title: "Herlock Sholmes", year: 1998, rating: 8.7},
  {id: 2, title: "Lord of the Fries", year: 2002, rating: 9.6},
  {id: 3, title: "Big Pineapple", year: 1656, rating: 3.2},
  {id: 4, title: "Bark Knight", year: 2011, rating: 9.0},
  {id: 5, title: "Bad Fellas", year: 1991, rating: 9.9}
];

// creating a movielist instance using the array and tbody id
let movieList = new MovieList('list', initialMovies);

// Upon clicking the Search by Title button
function titleSearchClick() {
  // gets child elements from form
  let formElements = document.getElementById('form-search').elements;

  // assigns value of input to variable
  let titleStr = formElements['search-input'].value;

  // calls searchId function using input as parameter
  movieList.searchTitle(titleStr);
}

// Upon clicking the Search by ID button
function idSearchClick() {
  // gets child elements from form
  let formElements = document.getElementById('form-search').elements;

  // assigns value of input to variable
  let idNum = formElements['search-input'].value;

  // calls searchId function using input as parameter
  movieList.searchId(idNum);
}

// Upon clicking the Refresh button
function refreshClick() {
  // calls sort ID for current movie list class
  movieList.sortID();
}

// Upon clicking the Sort by A-Z button
function sortAZClick() {
  // calls sort AZ for current movie list class
  movieList.sortAZ();
}

// Upon clicking the Sort by Z-A button
function sortZAClick() {
  // calls sort ZA for current movie list class
  movieList.sortZA();
}

// Upon clicking the Sort by Best button
function sortRatingClick() {
  // calls sort by rating for current movie list class
  movieList.sortRating();
}

// Upon clicking the Add movie button on page
function addMovieClick() {
  // gets form from DOM and all its child elements
  let formElements = document.getElementById('add-form').elements;

  // assigns values from each input to a variable
  let id = formElements['id'].value;
  let title = formElements['title'].value;
  let year = formElements['year'].value;
  let rating = formElements['rating'].value;

  // calls addMovie using input values as parameters
  movieList.addMovie(Number(id), title, Number(year), Number(rating));

  // clears each form input to blank
  formElements.id.value = "";
  formElements.title.value = "";
  formElements.year.value = "";
  formElements.rating.value = "";
}