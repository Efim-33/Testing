"use strict";

let numberOfFilms;
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const oneQuestion = prompt(
      "Один из последних просмотренных фильмов",
      ""
    ).trim();
    const answerOne = prompt("На сколько оцените его?", "");
    if (
      oneQuestion != "" &&
      answerOne != "" &&
      oneQuestion != null &&
      answerOne != null &&
      oneQuestion.length < 50 &&
      answerOne.length < 50
    ) {
      personalMovieDB.movies[oneQuestion] = answerOne;
      console.log("good");
    } else {
      console.log("error");
      i--;
    }
  }
}

function detectPersonalLevel() {
  rememberMyFilms();
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}
detectPersonalLevel();

const showMyDB = (person) => {
  if (!person) {
    console.log(personalMovieDB);
  }
};
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 2; i++) {
    const gener = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = gener;
  }
}
writeYourGenres();
