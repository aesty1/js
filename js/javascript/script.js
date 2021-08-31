let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: new Object(),
    actors: new Object(),
    genres: [],
    privat: false
};
let ques1 = prompt("Один из последних просмотренных фильмов?", "");
let ques2 = prompt("'На сколько оцените его?'", "");
personalMovieDB.movies[ques1] = ques2;

console.log(personalMovieDB);