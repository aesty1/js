let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов посмотрели?", '');
    while(numberOfFilms.length <= 0  || numberOfFilms.length >= 50 || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов посмотрели?", '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms() {
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
}
rememberMyFilms();
function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count  >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }
}



detectPersonalLevel();
function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
function writeYourGenres() {
    for(let i=1; i<=3;i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}
writeYourGenres();