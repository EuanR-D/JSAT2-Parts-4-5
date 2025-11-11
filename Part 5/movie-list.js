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
    // 
    this.rootId = rootId;
    // Array of movie objects
    this.movieArray = movieArray;

    this.refresh();
  }

  // movieRow function
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
}