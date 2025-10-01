// Q4.1
// creating a movie class with a constructor that gives 4 properties about the movie
class Movie {
  constructor(movieID, title, year, rating) {
    this.movieID = movieID;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}

console.log(Movie);


// Q4.2
// Constructing 10 mockup movies with all propeties
let bigPineapple = new Movie (3, "Big Pineapple", 1656, 3.2);
let someWarThing = new Movie (7, "Some War Thing", 2027, 0.0);
let herlockSholmes = new Movie (1, "Herlock Sholmes", 1998, 8.7);
let lordOfTheFries = new Movie (2, "Lord of the Fries", 2002, 9.6);
let treeGrump = new Movie (9, "Tree Grump", 1977, 7.0);
let barkNight = new Movie (4, "Bark Night", 2011, 9.0);
let georgeLupus = new Movie (6, "George Lupus", 1990, 7.9);
let fairyGodfather = new Movie (8, "Fairy Godfather", 1989, 8.6);
let badFellas = new Movie (5, "Bad Fellas", 1991, 9.9);
let space1002 = new Movie (10, "1002 Space", 1002, 8.5);

// putting all 10 movies into an array, with ID unordered
let tenMovieList = [bigPineapple, someWarThing, herlockSholmes, lordOfTheFries, treeGrump, barkNight, georgeLupus, fairyGodfather, badFellas, space1002];

console.log(tenMovieList);

