'use strict'; /* Строгий режим, ограничивающий синтаксис. 
Данный режим не даёт системе закрывать глаза на ошибки, выдавая соответствующие исключения.
Это приводит к остановке выполнения программ  */



/* Создаем обьект, в который будут помещаться ответы пользователя */
let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	startApp: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		// Задаем пользователю вопрос
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count < 0) {
			alert('Указано неверное значение!');
			console.log('Error!');
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		} /* Проверка ответа пользователя
		Если он отправит пустую форму, закроет ее, ответ будет не числовой или меньше нуля, 
		вопрос будет задан повторно */
		console.log(`Количество просмотренных фильмов: ${personalMovieDB.count}`);
	},
	/* В данной функции спрашиваем у пользователя про два последних фильма, 
	которые он посмотрел и их оценку */
	rememberFilms: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Один из последних просмотренных фильмов?', ''),
				b = +prompt('На сколько оцените его по десятибальной шкале?', '');
			/* Запускаем цикл, чтобы вопрос появлялся два раза */
			if (a != null && b != null && a != '' && b != '' && a.length < 50 && b <= 10) {
				console.log('Done!');
				personalMovieDB.movies[a] = b;
			} else {
				alert('Указано неверное значение!');
				console.log('Error!');
				i--;
				/* Проверяем ответ пользователя, 
				если ответ указан не правильно, то цикл откатывается назад и вопрос задается заново */
			}
		}
	},
	/* В данной функции сравниваем ответ пользователя на первый вопрос 
	и даем уведомление о его насмотренности, 
	если произойдет непредвиденная ошибка, то выдаст уведомление об этом */
	detectLevel: function () {
		if (personalMovieDB.count < 10) {
			alert('Просмотренно мало фильмов');
			console.log('Просмотренно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 50) {
			alert('Вы классический зритель');
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 50) {
			alert('Вы киноман!');
			console.log('Вы киноман!');
		} else {
			alert('Произошла ошибка!');
			console.log('Произошла ошибка!');
		}
	},
	/* Данная функция проверяет приватность базы данных. 
	Если она закрыта, то ответы не будут выводиться в консоль */
	showMyDB: function () {
		if (personalMovieDB.privat == false) {
			alert('Спасибо за уделенное время!');
			console.log(personalMovieDB);
		}
	},
	/* Функция, проверяющая свойство privat и меняющая его на противоположное */
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			 personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	/* В данной функции спрашиваем у пользователя три его любимых жанра */
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let favoriteGanre = prompt(`Ваш любимый жанр под номером ${i}`);
			personalMovieDB.genres[i - 1] = favoriteGanre;
		}
	}

};