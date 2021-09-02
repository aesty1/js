let numberOfFilms = prompt("Сколько фильмов посмотрели?", '');
while(numberOfFilms.length <= 0  || numberOfFilms.length >= 50) {
    numberOfFilms = prompt("Сколько фильмов посмотрели?", '');
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for(let i = personalMovieDB.count; i > 0; i--) {
    let a = prompt("Один из последних просмотренных фильмов?", '');
    while(a.length <= 0  || a.length >= 50) {
        a = prompt("Один из последних просмотренных фильмов?", '');
    }

    let b = prompt('На сколько оцените его?', '');
    while(b.length <= 0  || b.length >= 50) {
        b = prompt('На сколько оцените его?', '');
    }
    personalMovieDB.movies[a] = b;
    
}
if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count  >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else {
    alert("Вы киноман");
}