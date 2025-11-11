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

let movieList = new MovieList('list', initialMovies);

function titleSearchClick() {

  let formElements = document.getElementById('form-search').elements;

  let titleStr = formElements['search-input'].value;

  movieList.searchTitle(titleStr);
}

function idSearchClick() {

}

function refreshClick() {

}

function sortAZClick() {

}

function sortZAClick() {

}

function sortRatingClick() {

}

function addMovieClick() {}